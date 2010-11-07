var sys = require('sys')

var ConfigNodeClient = exports.ConfigNodeClient = function( addr, port ) {
	var self = this
	self.ipAddress = addr
	self.port = port

	this.getDataNodes = function( callback )  {
		//lookup data nodes from redis instance
		var nodes = ['localhost:88888']
		callback( null, nodes )
	}
}