module.exports = (router) => {
	router.get("/",
		// @param {object} req
		// @param {object} res

		(req,res) => {
			const data = {
				title: "turtles"
			};
			req.vueOptions.head.title = "TurtlesCRM"; // build the html like therm-crm
			res.renderVue("main/main.vue", data, req.vueOptions);
		},
	);
};