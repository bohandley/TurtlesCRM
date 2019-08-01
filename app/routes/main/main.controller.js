@param {object} = (router) => {
	router.get("/",
		@param {object} req
		@param {object} res

		(req,res) => {
			const data = {
				turtles: "turtles"
			};
			req.vueOptions.head.title = "TurtlesCRM"; // build the html like therm-crm
			res.renderVue("main/main.vue", data, req.vueOptions);
		},
	);
};