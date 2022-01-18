import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieReviewWhereUniqueInput } from "../../../inputs/MovieReviewWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteMovieReviewArgs {
  @TypeGraphQL.Field(_type => MovieReviewWhereUniqueInput, {
    nullable: false
  })
  where!: MovieReviewWhereUniqueInput;
}
