var etcdDiscover=require("./etcd/discover.js")

var fleet=function(host) {
	var fleetexport ={}
	
	fleetexport.newUnitFile=function (name,data,callback) {
		
	}
	
	fleetexport.startUnit=function (unit,callback) {
		
	}
	
	fleetexport.stopUnit=function (unit,callback) {
		
	}
	
	fleetexport.destroyUnit=function (unit,callback) {
		
	}
	
	fleetexport.getUnit=function(unit,callback) {
		
	}
	
	return fleetexport;
}





module.exports.connectViaEtcdDiscover=function (discover) {
	var hosts=etcdDiscover.getHosts(discover)
	return fleet("");
}

module.exports.connectDirect=function (host) {
	return fleet(host)
}

