import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("ShowReviewScalarWhereInput", {
  isAbstract: true
})
export class ShowReviewScalarWhereInput {
  @TypeGraphQL.Field(_type => [ShowReviewScalarWhereInput], {
    nullable: true
  })
  AND?: ShowReviewScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowReviewScalarWhereInput], {
    nullable: true
  })
  OR?: ShowReviewScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowReviewScalarWhereInput], {
    nullable: true
  })
  NOT?: ShowReviewScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  review?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  rating?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  showId?: IntFilter | undefined;
}
