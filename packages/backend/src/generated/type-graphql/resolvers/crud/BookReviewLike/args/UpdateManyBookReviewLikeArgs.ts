import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookReviewLikeUpdateManyMutationInput } from "../../../inputs/BookReviewLikeUpdateManyMutationInput";
import { BookReviewLikeWhereInput } from "../../../inputs/BookReviewLikeWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyBookReviewLikeArgs {
  @TypeGraphQL.Field(_type => BookReviewLikeUpdateManyMutationInput, {
    nullable: false
  })
  data!: BookReviewLikeUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => BookReviewLikeWhereInput, {
    nullable: true
  })
  where?: BookReviewLikeWhereInput | undefined;
}
