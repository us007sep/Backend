import * as koa from "koa";
import "./createConnection";
import hotels from "./hotels";

const server = new koa();

server.use(async ctx => {
    ctx.response.body = await hotels.find();
})

server.listen(process.env.PORT || 3009 , () => console.log("Koa server is running"));