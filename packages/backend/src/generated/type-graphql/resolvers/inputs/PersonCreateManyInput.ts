import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateManycareerInput } from "../inputs/PersonCreateManycareerInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PersonCreateManyInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => PersonCreateManycareerInput, {
    nullable: true
  })
  career?: PersonCreateManycareerInput | undefined;
}
