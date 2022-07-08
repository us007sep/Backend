// Simple Class tells what all data it can take from backend

import { Query, Resolver } from "type-graphql";
import hotels from "./hotels";

@Resolver()
export default class hotelsResolver{
    @Query(() => [hotels])
    hotel():Promise<hotels[]>{
        return hotels.find();
    }
}