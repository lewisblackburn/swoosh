import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShowReviewCreateInput } from "../../../inputs/ShowReviewCreateInput";
import { ShowReviewUpdateInput } from "../../../inputs/ShowReviewUpdateInput";
import { ShowReviewWhereUniqueInput } from "../../../inputs/ShowReviewWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertShowReviewArgs {
  @TypeGraphQL.Field(_type => ShowReviewWhereUniqueInput, {
    nullable: false
  })
  where!: ShowReviewWhereUniqueInput;

  @TypeGraphQL.Field(_type => ShowReviewCreateInput, {
    nullable: false
  })
  create!: ShowReviewCreateInput;

  @TypeGraphQL.Field(_type => ShowReviewUpdateInput, {
    nullable: false
  })
  update!: ShowReviewUpdateInput;
}
