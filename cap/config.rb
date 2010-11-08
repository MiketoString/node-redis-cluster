#add cap directory to include path
$:.push(File.dirname(__FILE__))

#when capistrano connects to remote machines, what username should it use?
set :user, "mike"
set :use_sudo, false

#git related settings to control how code is deployed
set :repository,  "git@github.com:MiketoString/node-redis-cluster.git"
set :scm_verbose, true
set :deploy_via, :remote_cache
set :scm, :git
set :branch, "master"

#remote server directory to operate out of
set :deploy_to, "/mnt/deploy/nrc"
