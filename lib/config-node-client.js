var sys = require('sys')

var ConfigNodeClient = exports.ConfigNodeClient = function( addr, port ) {
	var self = this
	self.ipAddress = addr
	self.port = port

	this.getDataNodeInfo = function( callback )  {
		//TODO: lookup data nodes from redis instance

		//hard coded for now, to work through redis-proxy
		var info = {
			1: {
				host: 'localhost',
				port: 8900,
				slots: [0,4095]
			}
		}

		callback( null, info )
	}
}