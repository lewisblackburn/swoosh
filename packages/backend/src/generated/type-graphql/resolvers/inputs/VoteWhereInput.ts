import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { ReviewRelationFilter } from "../inputs/ReviewRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class VoteWhereInput {
  @TypeGraphQL.Field(_type => [VoteWhereInput], {
    nullable: true
  })
  AND?: VoteWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VoteWhereInput], {
    nullable: true
  })
  OR?: VoteWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VoteWhereInput], {
    nullable: true
  })
  NOT?: VoteWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => ReviewRelationFilter, {
    nullable: true
  })
  review?: ReviewRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  reviewId?: IntFilter | undefined;
}
