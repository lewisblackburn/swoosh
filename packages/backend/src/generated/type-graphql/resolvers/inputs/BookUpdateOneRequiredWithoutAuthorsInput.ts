import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateOrConnectWithoutAuthorsInput } from "../inputs/BookCreateOrConnectWithoutAuthorsInput";
import { BookCreateWithoutAuthorsInput } from "../inputs/BookCreateWithoutAuthorsInput";
import { BookUpdateWithoutAuthorsInput } from "../inputs/BookUpdateWithoutAuthorsInput";
import { BookUpsertWithoutAuthorsInput } from "../inputs/BookUpsertWithoutAuthorsInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";

@TypeGraphQL.InputType("BookUpdateOneRequiredWithoutAuthorsInput", {
  isAbstract: true
})
export class BookUpdateOneRequiredWithoutAuthorsInput {
  @TypeGraphQL.Field(_type => BookCreateWithoutAuthorsInput, {
    nullable: true
  })
  create?: BookCreateWithoutAuthorsInput | undefined;

  @TypeGraphQL.Field(_type => BookCreateOrConnectWithoutAuthorsInput, {
    nullable: true
  })
  connectOrCreate?: BookCreateOrConnectWithoutAuthorsInput | undefined;

  @TypeGraphQL.Field(_type => BookUpsertWithoutAuthorsInput, {
    nullable: true
  })
  upsert?: BookUpsertWithoutAuthorsInput | undefined;

  @TypeGraphQL.Field(_type => BookWhereUniqueInput, {
    nullable: true
  })
  connect?: BookWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => BookUpdateWithoutAuthorsInput, {
    nullable: true
  })
  update?: BookUpdateWithoutAuthorsInput | undefined;
}
