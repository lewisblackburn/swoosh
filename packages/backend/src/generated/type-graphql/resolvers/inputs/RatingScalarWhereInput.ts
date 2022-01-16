import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RatingScalarWhereInput {
  @TypeGraphQL.Field(_type => [RatingScalarWhereInput], {
    nullable: true
  })
  AND?: RatingScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RatingScalarWhereInput], {
    nullable: true
  })
  OR?: RatingScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RatingScalarWhereInput], {
    nullable: true
  })
  NOT?: RatingScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  age?: StringFilter | undefined;
}
