require 'rubygems'
require 'railsless-deploy'
load 'cap/config.rb'

#need tasks for the following
#	install redis on a given machine
#	install, init.d scripts for nrc-proxy, nrc-data, nrc-handler, nrc-config

namespace :redis do
	task :install do
		run "cd #{deploy_to}/current/cap/scripts;./redis_install.sh"
	end

	task :buildconf do
		raise "you must provide port=" unless ENV['port']
		raise "you must provide template=" unless ENV['template']
		raise "you must provide out=" unless ENV['out']

		port = ENV['port']
		template = ENV['template']
		out = ENV['out']

		run "cp #{deploy_to}/current/cap/conf/#{template} #{out}"
		run "sed -i -e 's/REDISPORT/#{port}/g' #{out}"
	end

	task :start do
		raise "you must give the path to a configuration file as: cap reids:start conf=/path/to/redis.conf" unless ENV['conf']
		run "redis-server #{ENV['conf']}"
	end

	task :stop do
		raise "you must provide port=" unless ENV['port']
		port = ENV['port']
		run "kill `cat /var/run/redis.#{port}.pid"
	end
end
