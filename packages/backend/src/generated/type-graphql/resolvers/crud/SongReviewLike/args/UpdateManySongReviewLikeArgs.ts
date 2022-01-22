import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongReviewLikeUpdateManyMutationInput } from "../../../inputs/SongReviewLikeUpdateManyMutationInput";
import { SongReviewLikeWhereInput } from "../../../inputs/SongReviewLikeWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySongReviewLikeArgs {
  @TypeGraphQL.Field(_type => SongReviewLikeUpdateManyMutationInput, {
    nullable: false
  })
  data!: SongReviewLikeUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SongReviewLikeWhereInput, {
    nullable: true
  })
  where?: SongReviewLikeWhereInput | undefined;
}
