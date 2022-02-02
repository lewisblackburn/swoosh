import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieLikeWhereUniqueInput } from "../../../inputs/MovieLikeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteMovieLikeArgs {
  @TypeGraphQL.Field(_type => MovieLikeWhereUniqueInput, {
    nullable: false
  })
  where!: MovieLikeWhereUniqueInput;
}
