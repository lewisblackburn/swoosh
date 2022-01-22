import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongReviewLikeCreateInput } from "../../../inputs/SongReviewLikeCreateInput";

@TypeGraphQL.ArgsType()
export class CreateSongReviewLikeArgs {
  @TypeGraphQL.Field(_type => SongReviewLikeCreateInput, {
    nullable: false
  })
  data!: SongReviewLikeCreateInput;
}
