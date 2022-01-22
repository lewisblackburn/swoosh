import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShowReviewLikeWhereInput } from "../../../inputs/ShowReviewLikeWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyShowReviewLikeArgs {
  @TypeGraphQL.Field(_type => ShowReviewLikeWhereInput, {
    nullable: true
  })
  where?: ShowReviewLikeWhereInput | undefined;
}
