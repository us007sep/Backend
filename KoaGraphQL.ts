/* 
    UI -> RestAPI -> Backend -> Database -> Backend -> RestAPI -> UI

    RESTAPI is used to fetch the data from endpoint through HTTP methods responsible for CRUX
    Backend gives all the attributes of the hotel to RESTAPI
    
    Now if for example UI asks for 3 properties of hotel rather than 4
    GraphQL comes into play
    GraphQL is a better version of RESTAPI

    One of the most common limitations of REST out-of-the-box is that of overfetching and underfetching. 
    This happens because the only way for a client to download data is by hitting endpoints that return fixed data sets. 
    It’s very difficult to design the API in a way that it’s able to provide clients with their exact data needs.

    Overfetching means getting more information than you need. 
    For example, if the endpoint holds data on burgers available at a restaurant, you’d hit the /burgers endpoint, 
    and instead of only getting the names that you’re interested in, you may get everything that endpoint has to offer - 
    including price, ingredients, calories, etc. With GraphQL, you’d simply need to dictate what you want in a query:

    With GraphQL, you’d simply need to dictate what you want in a query:

    Frontend teams can now work with the typed GraphQL API knowing that if any changes occur from the backend team on the APIs design, 
    they’ll get this instant feedback when querying it from the frontend.


    Things required for GraphQL
    -> Resolver (Backend Response is given to Resolver and resolver gives to UI)
    -> GraphQL Server (Wrapper on KOA Server)
*/


import * as koa from "koa";
import { buildSchema } from "type-graphql";
import hotelsResolver from "./HotelResolver";
import { ApolloServer } from "apollo-server-koa";
import * as Router from "koa-router";
import { graphqlHTTP } from "koa-graphql";
import "./createConnection";


async function main(){
    const app = new koa();

    const resolvers =await buildSchema({
        resolvers: [hotelsResolver]
    });

    const appoloServer = new ApolloServer({schema:resolvers});

    const routers = new Router();
    routers.all("/graphql", graphqlHTTP({schema:resolvers}));      //graphqlHTTP is the server and first argument is the endpoint
    appoloServer.applyMiddleware({app});
    app.use(routers.routes());

    app.listen(process.env.PORT || 3010 , () => console.log("Hello from KOA Server"));
}

main();


