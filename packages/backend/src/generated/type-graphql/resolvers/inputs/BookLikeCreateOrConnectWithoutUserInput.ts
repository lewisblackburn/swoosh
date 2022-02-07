import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookLikeCreateWithoutUserInput } from "../inputs/BookLikeCreateWithoutUserInput";
import { BookLikeWhereUniqueInput } from "../inputs/BookLikeWhereUniqueInput";

@TypeGraphQL.InputType("BookLikeCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class BookLikeCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => BookLikeWhereUniqueInput, {
    nullable: false
  })
  where!: BookLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookLikeCreateWithoutUserInput, {
    nullable: false
  })
  create!: BookLikeCreateWithoutUserInput;
}
