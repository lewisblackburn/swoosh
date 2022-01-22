import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookReviewLikeCreateManyInput } from "../../../inputs/BookReviewLikeCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyBookReviewLikeArgs {
  @TypeGraphQL.Field(_type => [BookReviewLikeCreateManyInput], {
    nullable: false
  })
  data!: BookReviewLikeCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
