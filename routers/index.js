const router = require("koa-router")();
const controllers = require("../controllers");

router
	.get("/home", controllers.home)
	.get("/test", controllers.test)
	.get("/login", controllers.login);

module.exports = router;