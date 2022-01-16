import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReviewWhereInput } from "../../../inputs/ReviewWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyReviewArgs {
  @TypeGraphQL.Field(_type => ReviewWhereInput, {
    nullable: true
  })
  where?: ReviewWhereInput | undefined;
}
