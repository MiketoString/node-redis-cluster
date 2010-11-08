var sys = require('sys')
var redis = require("redis-client")
var EventEmitter = require('events').EventEmitter

var DataNodeClientPool = exports.DataNodeClientPool = function() {
    var self = this

    this.nodes = { }

    this.loadServer = function( id, host, port, range ) {
        var node = new DataNode( id, host, port, range )
        self.nodes[id] = node

        return node
    }

    this.unloadServer = function( id ) {
        delete self.nodes[id]
    }

    this.connectAll = function() {
        for( var id in self.nodes ) {
            var node = self.nodes[id]
            node.connect()
        }
    }

    this.getNodeBySlot = function( slot ) {
        for( var id in self.nodes ) {
            var n = self.nodes[id]

            if( n.hasSlot(slot) ) {
                return true
            }
        }

        return false
    }
}



var DataNode = exports.DataNode = function( id, host, port, range ) {
    EventEmitter.call( this )

    var self = this

    this.id = id
    this.low = range[0]
    this.high = range[1]

    this.client = redis.createClient( host, port, { maxReconnectionAttempts: 0 } )

    this.sendCommand = function( command, args, callback ) {
        var applyArgs = [command]
        for( var i = 0; i < args.lengh; i++ ) {
            applyArgs.push( args[i] )
        }
        applyArgs.push( callback )

        self.client.sendCommand.apply( self.client, applyArgs )
    }

    this.isAlive = function( callback ) {
        //add logic here that attempts to send a command
        callback( true )
    }

    this.hasSlot = function( slot ) {
        return slot >= self.low && slot <= self.high
    }
}
sys.inherits( DataNode, EventEmitter )
