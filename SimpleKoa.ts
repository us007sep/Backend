import * as koa from "koa";
import { Context } from "koa";
import * as router from "koa-router";

const server = new koa();
const routers = new router();

routers.get("/a",  (ctx: Context) => {
    ctx.response.body = "url a is invoked";
})

server.use(routers.routes());

server.listen(process.env.PORT || 3006 , () => console.log("Koa Server is Running"));

