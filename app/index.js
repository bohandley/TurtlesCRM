const express = require("express");
const config =  require("./config");
const Router = require("./router");

let app = express();

Router.init(app, config);

app.listen(config.port, () => {
	var pid = process.pid,
		envmt = config.env,
		prt = config.port;

	console.log("Worker " + pid + " running a " + envmt + " server listening on port " + prt);
});