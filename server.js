const app = new require("koa")();
const session = require("koa-session");
const router = require("./routers");
const config = require("./config/config.server");

app
	.use(session(app))
	.use(router.routes())
	.use(router.allowedMethods());

app.listen(config.port, ()=>console.log("server is runnig on http://localhost:" + config.port));