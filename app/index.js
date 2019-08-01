const express = require("express");
const config =  require("/config");
const Router = require("/router");

let app = express();

Router.init(app, config);

app.listen(config.port, () => {
	console.log("Worker ${process.pid} running a ${config.env} server listening on port ${config.port}");
});