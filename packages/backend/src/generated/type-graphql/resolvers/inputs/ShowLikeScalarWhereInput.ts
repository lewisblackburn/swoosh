import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("ShowLikeScalarWhereInput", {
  isAbstract: true
})
export class ShowLikeScalarWhereInput {
  @TypeGraphQL.Field(_type => [ShowLikeScalarWhereInput], {
    nullable: true
  })
  AND?: ShowLikeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowLikeScalarWhereInput], {
    nullable: true
  })
  OR?: ShowLikeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowLikeScalarWhereInput], {
    nullable: true
  })
  NOT?: ShowLikeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  showId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;
}
