import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Career } from "../../enums/Career";

@TypeGraphQL.InputType("PersonCreateManycareerInput", {
  isAbstract: true
})
export class PersonCreateManycareerInput {
  @TypeGraphQL.Field(_type => [Career], {
    nullable: false
  })
  set!: Array<"AUTHOR" | "ARTIST" | "ACTOR">;
}
