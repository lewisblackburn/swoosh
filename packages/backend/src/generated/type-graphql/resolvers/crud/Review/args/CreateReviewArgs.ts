import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReviewCreateInput } from "../../../inputs/ReviewCreateInput";

@TypeGraphQL.ArgsType()
export class CreateReviewArgs {
  @TypeGraphQL.Field(_type => ReviewCreateInput, {
    nullable: false
  })
  data!: ReviewCreateInput;
}
