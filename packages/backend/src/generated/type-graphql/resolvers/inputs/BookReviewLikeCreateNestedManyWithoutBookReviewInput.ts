import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookReviewLikeCreateManyBookReviewInputEnvelope } from "../inputs/BookReviewLikeCreateManyBookReviewInputEnvelope";
import { BookReviewLikeCreateOrConnectWithoutBookReviewInput } from "../inputs/BookReviewLikeCreateOrConnectWithoutBookReviewInput";
import { BookReviewLikeCreateWithoutBookReviewInput } from "../inputs/BookReviewLikeCreateWithoutBookReviewInput";
import { BookReviewLikeWhereUniqueInput } from "../inputs/BookReviewLikeWhereUniqueInput";

@TypeGraphQL.InputType("BookReviewLikeCreateNestedManyWithoutBookReviewInput", {
  isAbstract: true
})
export class BookReviewLikeCreateNestedManyWithoutBookReviewInput {
  @TypeGraphQL.Field(_type => [BookReviewLikeCreateWithoutBookReviewInput], {
    nullable: true
  })
  create?: BookReviewLikeCreateWithoutBookReviewInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookReviewLikeCreateOrConnectWithoutBookReviewInput], {
    nullable: true
  })
  connectOrCreate?: BookReviewLikeCreateOrConnectWithoutBookReviewInput[] | undefined;

  @TypeGraphQL.Field(_type => BookReviewLikeCreateManyBookReviewInputEnvelope, {
    nullable: true
  })
  createMany?: BookReviewLikeCreateManyBookReviewInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BookReviewLikeWhereUniqueInput], {
    nullable: true
  })
  connect?: BookReviewLikeWhereUniqueInput[] | undefined;
}
