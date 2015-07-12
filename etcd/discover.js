var rest = require("restler")
var wait = require("wait.for")

var getHosts = function(discover) {
    var discoverRes = wait.for(doHTTPGet, discover)
    if (discoverRes.node.nodes.length === 0) {
        console.log("Empty cluster")
        process.exit()
        return
    }

    var allHosts;
    var hostID = 0
    var gotHosts = false

    while (!gotHosts) {
        allHosts = wait.for(doHTTPGet, discoverRes.node.nodes[hostID].value + "/v2/admin/machines")
        if (allHosts.length > 0) {
            gotHosts = true
        } else {
            hostID++
        }
    }

    var hosts = []

    for (var id in allHosts) {
        if (allHosts.hasOwnProperty(id)) {
            hosts.push(allHosts[id].clientURL.replace("http://", "").replace("https://", ""))
        }
    }

    return hosts

}

var doHTTPGet = function(url, callback) {
    rest.get(url, {
        timeout: 10000
    }).on("complete", function(res) {
        if (res instanceof Error) {
            callback(res)
            return
        }
        callback(null, res)
    }).on("timeout", function() {
        callback(null, [])
    })
}

module.exports.getHosts = getHosts
