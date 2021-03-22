server '3.120.1.100', user: 'deploy', roles: %w(app db web),
  ssh_options: {
    # proxy: Net::SSH::Proxy::Command.new('ssh -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -W %h:%p'),
  }
  set :branch, ENV['FRONTEND_BRANCH_FULL'] if ENV['FRONTEND_BRANCH_FULL']
  branch = ENV['FRONTEND_BRANCH']
  backend_branch = ENV['BACKEND_BRANCH']
  revision = ENV['REVISION']
  project = "#{revision}#{branch}"
  backend_project = "#{revision}#{backend_branch}"
  set :capose_project, revision
  namespace :deploy do
    after :set_current_revision, 'prepare_env' do
      on roles(:app) do
        within release_path do
          # execute "ls && pwd"
          execute "cd '#{release_path}';sed -i s%REACT_APP_test_API=http://localhost:3001%REACT_APP_test_API=http://#{revision}.backend.testing.test.com%g .env.test"
          execute "cd '#{release_path}';sed -i s/PROJECT/#{revision}/g docker-compose-#{fetch(:stage)}.yml"
        end
      end
    end

    before :cleanup, :cleanup_permissions
    desc 'Set permissions on old releases before cleanup'
    task :cleanup_permissions do
      on release_roles :all do |host|
        releases = capture(:ls, '-x', releases_path).split
        if releases.count >= fetch(:keep_releases)
          info "Cleaning permissions on old releases"
          directories = (releases - releases.last(1))
          if directories.any?
            directories.each do |release|
              within releases_path.join(release) do
                  execute :sudo, :chown, '-R', 'deploy', './'
              end
            end
          else
            info t(:no_old_releases, host: host.to_s, keep_releases: fetch(:keep_releases))
          end
        end
      end
    end
  end
set :capose_commands, -> {
    [
        'build',
        'run --rm builder yarn build',
        'up -d web storybook'
      ]
}
