import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShowReviewCreateInput } from "../../../inputs/ShowReviewCreateInput";

@TypeGraphQL.ArgsType()
export class CreateShowReviewArgs {
  @TypeGraphQL.Field(_type => ShowReviewCreateInput, {
    nullable: false
  })
  data!: ShowReviewCreateInput;
}
