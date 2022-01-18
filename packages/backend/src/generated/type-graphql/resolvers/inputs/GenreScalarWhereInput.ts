import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("GenreScalarWhereInput", {
  isAbstract: true
})
export class GenreScalarWhereInput {
  @TypeGraphQL.Field(_type => [GenreScalarWhereInput], {
    nullable: true
  })
  AND?: GenreScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenreScalarWhereInput], {
    nullable: true
  })
  OR?: GenreScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenreScalarWhereInput], {
    nullable: true
  })
  NOT?: GenreScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;
}
