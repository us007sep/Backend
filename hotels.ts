import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export default class hotels extends BaseEntity {
    @Field(()=>String)
    @Column()
    name:string;
    @Field(()=>String)
    @Column()
    cuisines:string;
    @Field(()=>String)
    @Column()
    featured_image:string;
    @Field(()=>String)
    @PrimaryGeneratedColumn()
    id:string;
}