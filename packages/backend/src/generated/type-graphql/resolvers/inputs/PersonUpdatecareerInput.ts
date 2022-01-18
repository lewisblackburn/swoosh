import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Career } from "../../enums/Career";

@TypeGraphQL.InputType("PersonUpdatecareerInput", {
  isAbstract: true
})
export class PersonUpdatecareerInput {
  @TypeGraphQL.Field(_type => [Career], {
    nullable: true
  })
  set?: Array<"AUTHOR" | "ARTIST" | "ACTOR"> | undefined;

  @TypeGraphQL.Field(_type => [Career], {
    nullable: true
  })
  push?: Array<"AUTHOR" | "ARTIST" | "ACTOR"> | undefined;
}
