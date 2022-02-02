import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieLikeWhereInput } from "../../../inputs/MovieLikeWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMovieLikeArgs {
  @TypeGraphQL.Field(_type => MovieLikeWhereInput, {
    nullable: true
  })
  where?: MovieLikeWhereInput | undefined;
}
