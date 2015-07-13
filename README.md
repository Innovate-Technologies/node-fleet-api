# node-fleet-api
A simple Node.JS module to interact with Fleet on CoreOS. The module is currently capable to get info on a unit file, starting and stopping them and destroying them.

## Usage
```
var fleet=require("node-fleet-api")("http://127.0.0.1:49153") //This is the HTTP endpoint with the http:// bit without the / on the and
fleet.startUnit("test.service",function(err,res){});

```

## Functions

### Create a unit file
```
fleet.newUnit("name of unit",{unit content in JS object},callback)
```
for thr format of the JS object see [the official documentation](https://github.com/coreos/fleet/blob/master/Documentation/api-v1.md)

### Get a unit file
```
fleet.getUnit("name of unit",callback)
```

### Start a unit file
```
fleet.startUnit("name of unit",callback)
```
### Stop a unit file
```
fleet.stpoUnit("name of unit",callback)
```
### Destroy a unit file
```
fleet.destroyUnit("name of unit",callback)
```