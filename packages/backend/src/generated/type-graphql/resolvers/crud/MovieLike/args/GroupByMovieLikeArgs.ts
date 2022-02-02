import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieLikeOrderByWithAggregationInput } from "../../../inputs/MovieLikeOrderByWithAggregationInput";
import { MovieLikeScalarWhereWithAggregatesInput } from "../../../inputs/MovieLikeScalarWhereWithAggregatesInput";
import { MovieLikeWhereInput } from "../../../inputs/MovieLikeWhereInput";
import { MovieLikeScalarFieldEnum } from "../../../../enums/MovieLikeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMovieLikeArgs {
  @TypeGraphQL.Field(_type => MovieLikeWhereInput, {
    nullable: true
  })
  where?: MovieLikeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MovieLikeOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: MovieLikeOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieLikeScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"userId" | "movieId" | "createdAt">;

  @TypeGraphQL.Field(_type => MovieLikeScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MovieLikeScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
