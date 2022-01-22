import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShowReviewLikeUpdateManyMutationInput } from "../../../inputs/ShowReviewLikeUpdateManyMutationInput";
import { ShowReviewLikeWhereInput } from "../../../inputs/ShowReviewLikeWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyShowReviewLikeArgs {
  @TypeGraphQL.Field(_type => ShowReviewLikeUpdateManyMutationInput, {
    nullable: false
  })
  data!: ShowReviewLikeUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ShowReviewLikeWhereInput, {
    nullable: true
  })
  where?: ShowReviewLikeWhereInput | undefined;
}
