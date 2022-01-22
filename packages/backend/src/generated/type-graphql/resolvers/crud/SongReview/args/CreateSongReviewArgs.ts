import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongReviewCreateInput } from "../../../inputs/SongReviewCreateInput";

@TypeGraphQL.ArgsType()
export class CreateSongReviewArgs {
  @TypeGraphQL.Field(_type => SongReviewCreateInput, {
    nullable: false
  })
  data!: SongReviewCreateInput;
}
