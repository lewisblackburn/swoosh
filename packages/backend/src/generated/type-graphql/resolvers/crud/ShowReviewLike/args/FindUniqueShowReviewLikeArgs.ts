import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShowReviewLikeWhereUniqueInput } from "../../../inputs/ShowReviewLikeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueShowReviewLikeArgs {
  @TypeGraphQL.Field(_type => ShowReviewLikeWhereUniqueInput, {
    nullable: false
  })
  where!: ShowReviewLikeWhereUniqueInput;
}
