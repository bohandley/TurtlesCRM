const path = require("path");

class Config {
	constructor() {
		this.env 				= process.env.NODE_ENV || "development";
		this.root 			= path.normalize(__dirname + "/..");
		this.rootPath 	= process.env.ROOT_PATH || "/";
		this.app = {
			name: "TurtlesCRM",
		};
		this.port = Number(process.env.PORT) || 3005;
	}

}

module.exports = Config;