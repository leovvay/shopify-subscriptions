server 'app-staging.test.com', user: 'deploy', roles: %w(app db web),
  ssh_options: {
    proxy: Net::SSH::Proxy::Command.new('ssh -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no deploy@gateway-staging.test.com -W %h:%p'),
  }

set :branch, ENV['CIRCLE_TAG'] if ENV['CIRCLE_TAG']

set :capose_commands, -> {
  [
    'build',
    'run --rm builder yarn build',
    'up -d web storybook'
  ]
}
