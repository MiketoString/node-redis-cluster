var path = require('path')

require.paths.unshift(__dirname)

//redis-node-client -- https://github.com/fictorial/redis-node-client
require.paths.unshift( path.join(__dirname,'..','external','redis-node-client','lib') )

//hashlib -- https://github.com/brainfucker/hashlib
require.paths.unshift( path.join(__dirname,'..','external','hashlib') )
