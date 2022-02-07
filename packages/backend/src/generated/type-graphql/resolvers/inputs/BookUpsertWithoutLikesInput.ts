import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateWithoutLikesInput } from "../inputs/BookCreateWithoutLikesInput";
import { BookUpdateWithoutLikesInput } from "../inputs/BookUpdateWithoutLikesInput";

@TypeGraphQL.InputType("BookUpsertWithoutLikesInput", {
  isAbstract: true
})
export class BookUpsertWithoutLikesInput {
  @TypeGraphQL.Field(_type => BookUpdateWithoutLikesInput, {
    nullable: false
  })
  update!: BookUpdateWithoutLikesInput;

  @TypeGraphQL.Field(_type => BookCreateWithoutLikesInput, {
    nullable: false
  })
  create!: BookCreateWithoutLikesInput;
}
