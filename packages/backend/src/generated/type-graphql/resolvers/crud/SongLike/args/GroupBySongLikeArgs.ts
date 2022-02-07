import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongLikeOrderByWithAggregationInput } from "../../../inputs/SongLikeOrderByWithAggregationInput";
import { SongLikeScalarWhereWithAggregatesInput } from "../../../inputs/SongLikeScalarWhereWithAggregatesInput";
import { SongLikeWhereInput } from "../../../inputs/SongLikeWhereInput";
import { SongLikeScalarFieldEnum } from "../../../../enums/SongLikeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySongLikeArgs {
  @TypeGraphQL.Field(_type => SongLikeWhereInput, {
    nullable: true
  })
  where?: SongLikeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SongLikeOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SongLikeOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongLikeScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"userId" | "songId" | "createdAt">;

  @TypeGraphQL.Field(_type => SongLikeScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SongLikeScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
