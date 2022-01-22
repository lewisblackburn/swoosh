import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongReviewUpdateInput } from "../../../inputs/SongReviewUpdateInput";
import { SongReviewWhereUniqueInput } from "../../../inputs/SongReviewWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateSongReviewArgs {
  @TypeGraphQL.Field(_type => SongReviewUpdateInput, {
    nullable: false
  })
  data!: SongReviewUpdateInput;

  @TypeGraphQL.Field(_type => SongReviewWhereUniqueInput, {
    nullable: false
  })
  where!: SongReviewWhereUniqueInput;
}
