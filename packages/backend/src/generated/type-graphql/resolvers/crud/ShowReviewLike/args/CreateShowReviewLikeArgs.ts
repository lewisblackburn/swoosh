import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShowReviewLikeCreateInput } from "../../../inputs/ShowReviewLikeCreateInput";

@TypeGraphQL.ArgsType()
export class CreateShowReviewLikeArgs {
  @TypeGraphQL.Field(_type => ShowReviewLikeCreateInput, {
    nullable: false
  })
  data!: ShowReviewLikeCreateInput;
}
