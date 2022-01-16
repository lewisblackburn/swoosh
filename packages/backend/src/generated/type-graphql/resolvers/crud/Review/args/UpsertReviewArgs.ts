import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReviewCreateInput } from "../../../inputs/ReviewCreateInput";
import { ReviewUpdateInput } from "../../../inputs/ReviewUpdateInput";
import { ReviewWhereUniqueInput } from "../../../inputs/ReviewWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertReviewArgs {
  @TypeGraphQL.Field(_type => ReviewWhereUniqueInput, {
    nullable: false
  })
  where!: ReviewWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReviewCreateInput, {
    nullable: false
  })
  create!: ReviewCreateInput;

  @TypeGraphQL.Field(_type => ReviewUpdateInput, {
    nullable: false
  })
  update!: ReviewUpdateInput;
}
