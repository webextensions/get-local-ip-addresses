/*eslint-env node*/
'use strict';

// Reference: http://stackoverflow.com/questions/3653065/get-local-ip-address-in-node-js/8440736#8440736

var os = require('os');
var ifaces = os.networkInterfaces();

var localIpAddresses = [];

Object.keys(ifaces).forEach(function(ifname) {
    ifaces[ifname].forEach(function(iface) {
        if ('IPv4' !== iface.family) {
            // skip over non-ipv4 addresses
            return;
        }
        if (iface.internal !== false) {
            // internal (i.e. 127.0.0.1)
            // do nothing (continue)
        }
        localIpAddresses.push(iface.address);
    });
});

module.exports = localIpAddresses;

// Example:
// localIpAddresses = ['127.0.0.1', '192.168.1.101', '10.0.0.101']
