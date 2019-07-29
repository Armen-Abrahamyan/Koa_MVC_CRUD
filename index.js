const Koa = require('koa');
const Router = require('koa-router');
const respond = require('koa-respond');
const bodyParser = require('koa-bodyparser');
const routes = require("./routes/userRouter");

const port = 3000;
const app = new Koa();
const router = Router();

app.use(bodyParser());
app.use(respond());

routes(router);
app.use(router.routes()).use(router.allowedMethods());
app.use(routes);
app.listen(port, () => console.log(`Listening on ${port}`));

