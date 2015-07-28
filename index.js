var rest = require("restler")
module.exports = function(host) {
	var fleetexport = {}

	fleetexport.newUnit = function(name, data, callback) {
		rest.put(host + "/fleet/v1/units/" + name, {
			data: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json"
			},
			timeout: 100000
		}).on("complete", function(data, info) {
			if (typeof data.error !== "undefined") {
				callback(data)
				return
			}
			callback(null, data)
		}).on("timeout", function() {
			callback("timeout")
		})
	}

	fleetexport.startUnit = function(unit, callback) {
		rest.put(host + "/fleet/v1/units/" + unit, {
			data: JSON.stringify({
				desiredState: "launched"
			}),
			headers: {
				"Content-Type": "application/json"
			},
			timeout: 100000
		}).on("complete", function(data, info) {
			if (typeof data.error !== "undefined") {
				callback(data)
				return
			}
			callback(null, data)
		}).on("timeout", function() {
			callback("timeout")
		})
	}

	fleetexport.stopUnit = function(unit, callback) {
		rest.put(host + "/fleet/v1/units/" + unit, {
			data: JSON.stringify({
				desiredState: "inactive"
			}),
			headers: {
				"Content-Type": "application/json"
			},
			timeout: 100000
		}).on("complete", function(data, info) {
			if (typeof data.error !== "undefined") {
				callback(data)
				return
			}
			callback(null, data)
		}).on("timeout", function() {
			callback("timeout")
		})
	}

	fleetexport.destroyUnit = function(unit, callback) {
		rest.del(host + "/fleet/v1/units/" + unit, {
			timeout: 100000
		}).on("complete", function(data, info) {
			if (typeof data.error !== "undefined") {
				callback(data)
				return
			}
			callback(null, data)
		}).on("timeout", function() {
			callback("timeout")
		})
	}

	fleetexport.getUnit = function(unit, callback) {
		rest.get(host + "/fleet/v1/units/" + unit, {
			timeout: 100000
		}).on("complete", function(data, info) {
			if (typeof data.error !== "undefined") {
				callback(data)
				return
			}
			callback(null, data)
		}).on("timeout", function() {
			callback("timeout")
		})
	}
	
	fleetexport.getAllUnits = function(callback) {
		rest.get(host + "/fleet/v1/units/", {
			timeout: 100000
		}).on("complete", function(data, info) {
			if (typeof data.error !== "undefined") {
				callback(data)
				return
			}
			callback(null, data)
		}).on("timeout", function() {
			callback("timeout")
		})
	}

	return fleetexport;
}
