import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieLikeWhereUniqueInput } from "../../../inputs/MovieLikeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMovieLikeArgs {
  @TypeGraphQL.Field(_type => MovieLikeWhereUniqueInput, {
    nullable: false
  })
  where!: MovieLikeWhereUniqueInput;
}
