import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongLikeWhereInput } from "../inputs/SongLikeWhereInput";

@TypeGraphQL.InputType("SongLikeListRelationFilter", {
  isAbstract: true
})
export class SongLikeListRelationFilter {
  @TypeGraphQL.Field(_type => SongLikeWhereInput, {
    nullable: true
  })
  every?: SongLikeWhereInput | undefined;

  @TypeGraphQL.Field(_type => SongLikeWhereInput, {
    nullable: true
  })
  some?: SongLikeWhereInput | undefined;

  @TypeGraphQL.Field(_type => SongLikeWhereInput, {
    nullable: true
  })
  none?: SongLikeWhereInput | undefined;
}
