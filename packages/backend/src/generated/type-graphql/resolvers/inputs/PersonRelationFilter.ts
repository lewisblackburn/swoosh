import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonWhereInput } from "../inputs/PersonWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PersonRelationFilter {
  @TypeGraphQL.Field(_type => PersonWhereInput, {
    nullable: true
  })
  is?: PersonWhereInput | undefined;

  @TypeGraphQL.Field(_type => PersonWhereInput, {
    nullable: true
  })
  isNot?: PersonWhereInput | undefined;
}
