import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateOrConnectWithoutLikesInput } from "../inputs/BookCreateOrConnectWithoutLikesInput";
import { BookCreateWithoutLikesInput } from "../inputs/BookCreateWithoutLikesInput";
import { BookUpdateWithoutLikesInput } from "../inputs/BookUpdateWithoutLikesInput";
import { BookUpsertWithoutLikesInput } from "../inputs/BookUpsertWithoutLikesInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";

@TypeGraphQL.InputType("BookUpdateOneRequiredWithoutLikesInput", {
  isAbstract: true
})
export class BookUpdateOneRequiredWithoutLikesInput {
  @TypeGraphQL.Field(_type => BookCreateWithoutLikesInput, {
    nullable: true
  })
  create?: BookCreateWithoutLikesInput | undefined;

  @TypeGraphQL.Field(_type => BookCreateOrConnectWithoutLikesInput, {
    nullable: true
  })
  connectOrCreate?: BookCreateOrConnectWithoutLikesInput | undefined;

  @TypeGraphQL.Field(_type => BookUpsertWithoutLikesInput, {
    nullable: true
  })
  upsert?: BookUpsertWithoutLikesInput | undefined;

  @TypeGraphQL.Field(_type => BookWhereUniqueInput, {
    nullable: true
  })
  connect?: BookWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => BookUpdateWithoutLikesInput, {
    nullable: true
  })
  update?: BookUpdateWithoutLikesInput | undefined;
}
