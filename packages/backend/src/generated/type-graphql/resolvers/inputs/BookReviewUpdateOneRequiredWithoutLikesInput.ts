import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookReviewCreateOrConnectWithoutLikesInput } from "../inputs/BookReviewCreateOrConnectWithoutLikesInput";
import { BookReviewCreateWithoutLikesInput } from "../inputs/BookReviewCreateWithoutLikesInput";
import { BookReviewUpdateWithoutLikesInput } from "../inputs/BookReviewUpdateWithoutLikesInput";
import { BookReviewUpsertWithoutLikesInput } from "../inputs/BookReviewUpsertWithoutLikesInput";
import { BookReviewWhereUniqueInput } from "../inputs/BookReviewWhereUniqueInput";

@TypeGraphQL.InputType("BookReviewUpdateOneRequiredWithoutLikesInput", {
  isAbstract: true
})
export class BookReviewUpdateOneRequiredWithoutLikesInput {
  @TypeGraphQL.Field(_type => BookReviewCreateWithoutLikesInput, {
    nullable: true
  })
  create?: BookReviewCreateWithoutLikesInput | undefined;

  @TypeGraphQL.Field(_type => BookReviewCreateOrConnectWithoutLikesInput, {
    nullable: true
  })
  connectOrCreate?: BookReviewCreateOrConnectWithoutLikesInput | undefined;

  @TypeGraphQL.Field(_type => BookReviewUpsertWithoutLikesInput, {
    nullable: true
  })
  upsert?: BookReviewUpsertWithoutLikesInput | undefined;

  @TypeGraphQL.Field(_type => BookReviewWhereUniqueInput, {
    nullable: true
  })
  connect?: BookReviewWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => BookReviewUpdateWithoutLikesInput, {
    nullable: true
  })
  update?: BookReviewUpdateWithoutLikesInput | undefined;
}
