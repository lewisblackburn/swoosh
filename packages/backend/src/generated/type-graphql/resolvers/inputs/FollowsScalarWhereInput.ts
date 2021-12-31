import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FollowsScalarWhereInput {
  @TypeGraphQL.Field(_type => [FollowsScalarWhereInput], {
    nullable: true
  })
  AND?: FollowsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowsScalarWhereInput], {
    nullable: true
  })
  OR?: FollowsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowsScalarWhereInput], {
    nullable: true
  })
  NOT?: FollowsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  followingId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  followerId?: IntFilter | undefined;
}
