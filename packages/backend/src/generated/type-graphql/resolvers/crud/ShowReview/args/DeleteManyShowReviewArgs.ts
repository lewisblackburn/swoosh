import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShowReviewWhereInput } from "../../../inputs/ShowReviewWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyShowReviewArgs {
  @TypeGraphQL.Field(_type => ShowReviewWhereInput, {
    nullable: true
  })
  where?: ShowReviewWhereInput | undefined;
}
