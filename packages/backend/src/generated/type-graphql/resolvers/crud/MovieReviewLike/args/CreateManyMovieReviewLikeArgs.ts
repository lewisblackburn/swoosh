import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieReviewLikeCreateManyInput } from "../../../inputs/MovieReviewLikeCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMovieReviewLikeArgs {
  @TypeGraphQL.Field(_type => [MovieReviewLikeCreateManyInput], {
    nullable: false
  })
  data!: MovieReviewLikeCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
