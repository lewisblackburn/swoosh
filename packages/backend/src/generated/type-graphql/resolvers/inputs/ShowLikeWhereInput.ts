import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { ShowRelationFilter } from "../inputs/ShowRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("ShowLikeWhereInput", {
  isAbstract: true
})
export class ShowLikeWhereInput {
  @TypeGraphQL.Field(_type => [ShowLikeWhereInput], {
    nullable: true
  })
  AND?: ShowLikeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowLikeWhereInput], {
    nullable: true
  })
  OR?: ShowLikeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowLikeWhereInput], {
    nullable: true
  })
  NOT?: ShowLikeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => ShowRelationFilter, {
    nullable: true
  })
  show?: ShowRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  showId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;
}
