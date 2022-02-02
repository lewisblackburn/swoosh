import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieLikeUpdateManyMutationInput } from "../../../inputs/MovieLikeUpdateManyMutationInput";
import { MovieLikeWhereInput } from "../../../inputs/MovieLikeWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMovieLikeArgs {
  @TypeGraphQL.Field(_type => MovieLikeUpdateManyMutationInput, {
    nullable: false
  })
  data!: MovieLikeUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MovieLikeWhereInput, {
    nullable: true
  })
  where?: MovieLikeWhereInput | undefined;
}
