import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("FollowsWhereInput", {
  isAbstract: true
})
export class FollowsWhereInput {
  @TypeGraphQL.Field(_type => [FollowsWhereInput], {
    nullable: true
  })
  AND?: FollowsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowsWhereInput], {
    nullable: true
  })
  OR?: FollowsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowsWhereInput], {
    nullable: true
  })
  NOT?: FollowsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  following?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  followingId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  follower?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  followerId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;
}
