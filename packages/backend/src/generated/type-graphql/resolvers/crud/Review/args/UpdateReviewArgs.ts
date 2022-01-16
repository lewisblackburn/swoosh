import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReviewUpdateInput } from "../../../inputs/ReviewUpdateInput";
import { ReviewWhereUniqueInput } from "../../../inputs/ReviewWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateReviewArgs {
  @TypeGraphQL.Field(_type => ReviewUpdateInput, {
    nullable: false
  })
  data!: ReviewUpdateInput;

  @TypeGraphQL.Field(_type => ReviewWhereUniqueInput, {
    nullable: false
  })
  where!: ReviewWhereUniqueInput;
}
