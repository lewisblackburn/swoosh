import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumCareerNullableListFilter } from "../inputs/EnumCareerNullableListFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PersonScalarWhereInput {
  @TypeGraphQL.Field(_type => [PersonScalarWhereInput], {
    nullable: true
  })
  AND?: PersonScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonScalarWhereInput], {
    nullable: true
  })
  OR?: PersonScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonScalarWhereInput], {
    nullable: true
  })
  NOT?: PersonScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => EnumCareerNullableListFilter, {
    nullable: true
  })
  career?: EnumCareerNullableListFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;
}
