import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookReviewLikeCreateManyUserInputEnvelope } from "../inputs/BookReviewLikeCreateManyUserInputEnvelope";
import { BookReviewLikeCreateOrConnectWithoutUserInput } from "../inputs/BookReviewLikeCreateOrConnectWithoutUserInput";
import { BookReviewLikeCreateWithoutUserInput } from "../inputs/BookReviewLikeCreateWithoutUserInput";
import { BookReviewLikeWhereUniqueInput } from "../inputs/BookReviewLikeWhereUniqueInput";

@TypeGraphQL.InputType("BookReviewLikeCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class BookReviewLikeCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [BookReviewLikeCreateWithoutUserInput], {
    nullable: true
  })
  create?: BookReviewLikeCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookReviewLikeCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: BookReviewLikeCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => BookReviewLikeCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: BookReviewLikeCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BookReviewLikeWhereUniqueInput], {
    nullable: true
  })
  connect?: BookReviewLikeWhereUniqueInput[] | undefined;
}
