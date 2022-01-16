import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateOrConnectWithoutReviewsInput } from "../inputs/BookCreateOrConnectWithoutReviewsInput";
import { BookCreateWithoutReviewsInput } from "../inputs/BookCreateWithoutReviewsInput";
import { BookUpdateWithoutReviewsInput } from "../inputs/BookUpdateWithoutReviewsInput";
import { BookUpsertWithoutReviewsInput } from "../inputs/BookUpsertWithoutReviewsInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BookUpdateOneWithoutReviewsInput {
  @TypeGraphQL.Field(_type => BookCreateWithoutReviewsInput, {
    nullable: true
  })
  create?: BookCreateWithoutReviewsInput | undefined;

  @TypeGraphQL.Field(_type => BookCreateOrConnectWithoutReviewsInput, {
    nullable: true
  })
  connectOrCreate?: BookCreateOrConnectWithoutReviewsInput | undefined;

  @TypeGraphQL.Field(_type => BookUpsertWithoutReviewsInput, {
    nullable: true
  })
  upsert?: BookUpsertWithoutReviewsInput | undefined;

  @TypeGraphQL.Field(_type => BookWhereUniqueInput, {
    nullable: true
  })
  connect?: BookWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => BookUpdateWithoutReviewsInput, {
    nullable: true
  })
  update?: BookUpdateWithoutReviewsInput | undefined;
}
