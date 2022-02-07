import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { SongRelationFilter } from "../inputs/SongRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("SongLikeWhereInput", {
  isAbstract: true
})
export class SongLikeWhereInput {
  @TypeGraphQL.Field(_type => [SongLikeWhereInput], {
    nullable: true
  })
  AND?: SongLikeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongLikeWhereInput], {
    nullable: true
  })
  OR?: SongLikeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongLikeWhereInput], {
    nullable: true
  })
  NOT?: SongLikeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => SongRelationFilter, {
    nullable: true
  })
  song?: SongRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  songId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;
}
