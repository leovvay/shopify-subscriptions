# config valid only for current version of Capistrano
lock '3.8.1'

set :application, 'front-client'
set :repo_url, 'git@github.com:org/repo-name.git'
set :deploy_to, "/home/deploy/apps/#{fetch(:application)}"
