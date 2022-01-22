import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongReviewLikeWhereUniqueInput } from "../../../inputs/SongReviewLikeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueSongReviewLikeArgs {
  @TypeGraphQL.Field(_type => SongReviewLikeWhereUniqueInput, {
    nullable: false
  })
  where!: SongReviewLikeWhereUniqueInput;
}
