import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongReviewWhereUniqueInput } from "../../../inputs/SongReviewWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteSongReviewArgs {
  @TypeGraphQL.Field(_type => SongReviewWhereUniqueInput, {
    nullable: false
  })
  where!: SongReviewWhereUniqueInput;
}
