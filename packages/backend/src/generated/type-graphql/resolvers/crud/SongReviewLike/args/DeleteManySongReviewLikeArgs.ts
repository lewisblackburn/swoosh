import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongReviewLikeWhereInput } from "../../../inputs/SongReviewLikeWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySongReviewLikeArgs {
  @TypeGraphQL.Field(_type => SongReviewLikeWhereInput, {
    nullable: true
  })
  where?: SongReviewLikeWhereInput | undefined;
}
