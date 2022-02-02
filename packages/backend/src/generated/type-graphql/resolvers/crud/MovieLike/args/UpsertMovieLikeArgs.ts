import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieLikeCreateInput } from "../../../inputs/MovieLikeCreateInput";
import { MovieLikeUpdateInput } from "../../../inputs/MovieLikeUpdateInput";
import { MovieLikeWhereUniqueInput } from "../../../inputs/MovieLikeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertMovieLikeArgs {
  @TypeGraphQL.Field(_type => MovieLikeWhereUniqueInput, {
    nullable: false
  })
  where!: MovieLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieLikeCreateInput, {
    nullable: false
  })
  create!: MovieLikeCreateInput;

  @TypeGraphQL.Field(_type => MovieLikeUpdateInput, {
    nullable: false
  })
  update!: MovieLikeUpdateInput;
}
