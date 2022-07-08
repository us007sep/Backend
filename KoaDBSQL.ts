import * as koa from "koa";
import * as dotenv from "dotenv";
import {Pool} from "pg";

const server = new koa();
dotenv.config();

const pool = new Pool({
    connectionString:process.env.DATABASE,
    ssl:{
        rejectUnauthorized:false,
    }
});

server.use( async ctx => {
    await pool.connect();
    const output = await pool.query("select * from hotels");
    ctx.response.body = output;
})

server.listen(process.env.PORT || 3007 , () => console.log("Hello from KOA Server"));