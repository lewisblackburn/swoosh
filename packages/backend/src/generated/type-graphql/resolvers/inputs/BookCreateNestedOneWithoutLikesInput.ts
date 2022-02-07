import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateOrConnectWithoutLikesInput } from "../inputs/BookCreateOrConnectWithoutLikesInput";
import { BookCreateWithoutLikesInput } from "../inputs/BookCreateWithoutLikesInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";

@TypeGraphQL.InputType("BookCreateNestedOneWithoutLikesInput", {
  isAbstract: true
})
export class BookCreateNestedOneWithoutLikesInput {
  @TypeGraphQL.Field(_type => BookCreateWithoutLikesInput, {
    nullable: true
  })
  create?: BookCreateWithoutLikesInput | undefined;

  @TypeGraphQL.Field(_type => BookCreateOrConnectWithoutLikesInput, {
    nullable: true
  })
  connectOrCreate?: BookCreateOrConnectWithoutLikesInput | undefined;

  @TypeGraphQL.Field(_type => BookWhereUniqueInput, {
    nullable: true
  })
  connect?: BookWhereUniqueInput | undefined;
}
