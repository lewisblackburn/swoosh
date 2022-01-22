import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookReviewWhereInput } from "../../../inputs/BookReviewWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyBookReviewArgs {
  @TypeGraphQL.Field(_type => BookReviewWhereInput, {
    nullable: true
  })
  where?: BookReviewWhereInput | undefined;
}
