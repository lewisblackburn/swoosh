import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Career } from "../../enums/Career";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PersonCreatecareerInput {
  @TypeGraphQL.Field(_type => [Career], {
    nullable: false
  })
  set!: Array<"AUTHOR" | "ARTIST" | "ACTOR">;
}
