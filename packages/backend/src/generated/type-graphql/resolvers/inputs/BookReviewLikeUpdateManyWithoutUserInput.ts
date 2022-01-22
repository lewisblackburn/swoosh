import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookReviewLikeCreateManyUserInputEnvelope } from "../inputs/BookReviewLikeCreateManyUserInputEnvelope";
import { BookReviewLikeCreateOrConnectWithoutUserInput } from "../inputs/BookReviewLikeCreateOrConnectWithoutUserInput";
import { BookReviewLikeCreateWithoutUserInput } from "../inputs/BookReviewLikeCreateWithoutUserInput";
import { BookReviewLikeScalarWhereInput } from "../inputs/BookReviewLikeScalarWhereInput";
import { BookReviewLikeUpdateManyWithWhereWithoutUserInput } from "../inputs/BookReviewLikeUpdateManyWithWhereWithoutUserInput";
import { BookReviewLikeUpdateWithWhereUniqueWithoutUserInput } from "../inputs/BookReviewLikeUpdateWithWhereUniqueWithoutUserInput";
import { BookReviewLikeUpsertWithWhereUniqueWithoutUserInput } from "../inputs/BookReviewLikeUpsertWithWhereUniqueWithoutUserInput";
import { BookReviewLikeWhereUniqueInput } from "../inputs/BookReviewLikeWhereUniqueInput";

@TypeGraphQL.InputType("BookReviewLikeUpdateManyWithoutUserInput", {
  isAbstract: true
})
export class BookReviewLikeUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [BookReviewLikeCreateWithoutUserInput], {
    nullable: true
  })
  create?: BookReviewLikeCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookReviewLikeCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: BookReviewLikeCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookReviewLikeUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: BookReviewLikeUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => BookReviewLikeCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: BookReviewLikeCreateManyUserInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [BookReviewLikeUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: BookReviewLikeUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookReviewLikeUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: BookReviewLikeUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookReviewLikeScalarWhereInput], {
    nullable: true
  })
  deleteMany?: BookReviewLikeScalarWhereInput[] | undefined;
}
