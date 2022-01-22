import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookReviewWhereUniqueInput } from "../../../inputs/BookReviewWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueBookReviewArgs {
  @TypeGraphQL.Field(_type => BookReviewWhereUniqueInput, {
    nullable: false
  })
  where!: BookReviewWhereUniqueInput;
}
