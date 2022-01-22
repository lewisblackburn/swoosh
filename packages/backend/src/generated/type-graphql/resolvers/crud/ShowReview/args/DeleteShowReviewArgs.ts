import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShowReviewWhereUniqueInput } from "../../../inputs/ShowReviewWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteShowReviewArgs {
  @TypeGraphQL.Field(_type => ShowReviewWhereUniqueInput, {
    nullable: false
  })
  where!: ShowReviewWhereUniqueInput;
}
