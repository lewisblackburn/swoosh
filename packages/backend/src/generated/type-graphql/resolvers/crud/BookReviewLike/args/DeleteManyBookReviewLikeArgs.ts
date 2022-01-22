import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookReviewLikeWhereInput } from "../../../inputs/BookReviewLikeWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyBookReviewLikeArgs {
  @TypeGraphQL.Field(_type => BookReviewLikeWhereInput, {
    nullable: true
  })
  where?: BookReviewLikeWhereInput | undefined;
}
