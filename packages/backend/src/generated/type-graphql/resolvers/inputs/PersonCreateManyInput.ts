import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Career } from "../../enums/Career";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PersonCreateManyInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => Career, {
    nullable: false
  })
  type!: "AUTHOR" | "ARTIST" | "ACTOR";
}
