import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShowReviewUpdateInput } from "../../../inputs/ShowReviewUpdateInput";
import { ShowReviewWhereUniqueInput } from "../../../inputs/ShowReviewWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateShowReviewArgs {
  @TypeGraphQL.Field(_type => ShowReviewUpdateInput, {
    nullable: false
  })
  data!: ShowReviewUpdateInput;

  @TypeGraphQL.Field(_type => ShowReviewWhereUniqueInput, {
    nullable: false
  })
  where!: ShowReviewWhereUniqueInput;
}
