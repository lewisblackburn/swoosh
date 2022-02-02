import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieLikeCreateManyInput } from "../../../inputs/MovieLikeCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMovieLikeArgs {
  @TypeGraphQL.Field(_type => [MovieLikeCreateManyInput], {
    nullable: false
  })
  data!: MovieLikeCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
