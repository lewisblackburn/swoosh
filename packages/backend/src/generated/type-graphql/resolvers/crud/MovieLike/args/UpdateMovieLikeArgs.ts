import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieLikeUpdateInput } from "../../../inputs/MovieLikeUpdateInput";
import { MovieLikeWhereUniqueInput } from "../../../inputs/MovieLikeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateMovieLikeArgs {
  @TypeGraphQL.Field(_type => MovieLikeUpdateInput, {
    nullable: false
  })
  data!: MovieLikeUpdateInput;

  @TypeGraphQL.Field(_type => MovieLikeWhereUniqueInput, {
    nullable: false
  })
  where!: MovieLikeWhereUniqueInput;
}
