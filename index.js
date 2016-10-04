var rest = require("restler")
module.exports = function (host) {
	var fleetexport = {}

	fleetexport.newUnit = function (name, data) {
		return new Promise(function (resolve, reject) {
			rest.put(host + "/fleet/v1/units/" + name, {
				data: JSON.stringify(data),
				headers: {
					"Content-Type": "application/json"
				},
				timeout: 100000
			}).on("complete", function (data) {
				if (typeof data.error !== "undefined") {
					return reject(new Error(JSON.parse(data.error)))
				}
				return resolve(data)
			}).on("timeout", function () {
				reject(new Error("Time-out"))
			}).on("error", reject)
		})
	}

	fleetexport.startUnit = function (unit) {
		return new Promise(function (resolve, reject) {
			rest.put(host + "/fleet/v1/units/" + unit, {
				data: JSON.stringify({
					desiredState: "launched"
				}),
				headers: {
					"Content-Type": "application/json"
				},
				timeout: 100000
			}).on("complete", function (data) {
				if (typeof data.error !== "undefined") {
					return reject(new Error(JSON.parse(data.error)))
				}
				return resolve(data)
			}).on("timeout", function () {
				reject(new Error("Time-out"))
			}).on("error", reject)
		})
	}

	fleetexport.stopUnit = function (unit) {
		return new Promise(function (resolve, reject) {
			rest.put(host + "/fleet/v1/units/" + unit, {
				data: JSON.stringify({
					desiredState: "inactive"
				}),
				headers: {
					"Content-Type": "application/json"
				},
				timeout: 100000
			}).on("complete", function (data) {
				if (typeof data.error !== "undefined") {
					return reject(new Error(JSON.parse(data.error)))
				}
				return resolve(data)
			}).on("timeout", function () {
				reject(new Error("Time-out"))
			}).on("error", reject)
		})
	}

	fleetexport.destroyUnit = function (unit) {
		return new Promise(function (resolve, reject) {
			rest.del(host + "/fleet/v1/units/" + unit, {
				timeout: 100000
			}).on("complete", function (data) {
				if (typeof data.error !== "undefined") {
					return reject(new Error(JSON.parse(data.error)))
				}
				return resolve(data)
			}).on("timeout", function () {
				reject(new Error("Time-out"))
			}).on("error", reject)
		})
	}

	fleetexport.getUnit = function (unit) {
		return new Promise(function (resolve, reject) {
			rest.get(host + "/fleet/v1/units/" + unit, {
				timeout: 100000
			}).on("complete", function (data) {
				if (typeof data.error !== "undefined") {
					return reject(new Error(JSON.parse(data.error)))
				}
				return resolve(data)
			}).on("timeout", function () {
				reject(new Error("Time-out"))
			}).on("error", reject)
		})
	}

	fleetexport.getAllUnits = function () {
		return new Promise(function (resolve, reject) {
			rest.get(host + "/fleet/v1/units", {
				timeout: 100000
			}).on("complete", function (data) {
				if (typeof data.error !== "undefined") {
					return reject(new Error(JSON.parse(data.error)))
				}
				return resolve(data)
			}).on("timeout", function () {
				reject(new Error("Time-out"))
			}).on("error", reject)
		})
	}

	fleetexport.getAllMachines = function () {
		return new Promise(function (resolve, reject) {
			rest.get(host + "/fleet/v1/machines", {
				timeout: 100000
			}).on("complete", function (data) {
				if (typeof data.error !== "undefined") {
					return reject(new Error(JSON.parse(data.error)))
				}
				return resolve(data)
			}).on("timeout", function () {
				reject(new Error("Time-out"))
			}).on("error", reject)
		})

	}

	return fleetexport;
}
