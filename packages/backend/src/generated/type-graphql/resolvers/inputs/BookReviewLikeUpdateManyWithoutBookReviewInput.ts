import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookReviewLikeCreateManyBookReviewInputEnvelope } from "../inputs/BookReviewLikeCreateManyBookReviewInputEnvelope";
import { BookReviewLikeCreateOrConnectWithoutBookReviewInput } from "../inputs/BookReviewLikeCreateOrConnectWithoutBookReviewInput";
import { BookReviewLikeCreateWithoutBookReviewInput } from "../inputs/BookReviewLikeCreateWithoutBookReviewInput";
import { BookReviewLikeScalarWhereInput } from "../inputs/BookReviewLikeScalarWhereInput";
import { BookReviewLikeUpdateManyWithWhereWithoutBookReviewInput } from "../inputs/BookReviewLikeUpdateManyWithWhereWithoutBookReviewInput";
import { BookReviewLikeUpdateWithWhereUniqueWithoutBookReviewInput } from "../inputs/BookReviewLikeUpdateWithWhereUniqueWithoutBookReviewInput";
import { BookReviewLikeUpsertWithWhereUniqueWithoutBookReviewInput } from "../inputs/BookReviewLikeUpsertWithWhereUniqueWithoutBookReviewInput";
import { BookReviewLikeWhereUniqueInput } from "../inputs/BookReviewLikeWhereUniqueInput";

@TypeGraphQL.InputType("BookReviewLikeUpdateManyWithoutBookReviewInput", {
  isAbstract: true
})
export class BookReviewLikeUpdateManyWithoutBookReviewInput {
  @TypeGraphQL.Field(_type => [BookReviewLikeCreateWithoutBookReviewInput], {
    nullable: true
  })
  create?: BookReviewLikeCreateWithoutBookReviewInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookReviewLikeCreateOrConnectWithoutBookReviewInput], {
    nullable: true
  })
  connectOrCreate?: BookReviewLikeCreateOrConnectWithoutBookReviewInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookReviewLikeUpsertWithWhereUniqueWithoutBookReviewInput], {
    nullable: true
  })
  upsert?: BookReviewLikeUpsertWithWhereUniqueWithoutBookReviewInput[] | undefined;

  @TypeGraphQL.Field(_type => BookReviewLikeCreateManyBookReviewInputEnvelope, {
    nullable: true
  })
  createMany?: BookReviewLikeCreateManyBookReviewInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BookReviewLikeWhereUniqueInput], {
    nullable: true
  })
  set?: BookReviewLikeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookReviewLikeWhereUniqueInput], {
    nullable: true
  })
  disconnect?: BookReviewLikeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookReviewLikeWhereUniqueInput], {
    nullable: true
  })
  delete?: BookReviewLikeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookReviewLikeWhereUniqueInput], {
    nullable: true
  })
  connect?: BookReviewLikeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookReviewLikeUpdateWithWhereUniqueWithoutBookReviewInput], {
    nullable: true
  })
  update?: BookReviewLikeUpdateWithWhereUniqueWithoutBookReviewInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookReviewLikeUpdateManyWithWhereWithoutBookReviewInput], {
    nullable: true
  })
  updateMany?: BookReviewLikeUpdateManyWithWhereWithoutBookReviewInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookReviewLikeScalarWhereInput], {
    nullable: true
  })
  deleteMany?: BookReviewLikeScalarWhereInput[] | undefined;
}
