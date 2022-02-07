import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookLikeCreateWithoutBookInput } from "../inputs/BookLikeCreateWithoutBookInput";
import { BookLikeWhereUniqueInput } from "../inputs/BookLikeWhereUniqueInput";

@TypeGraphQL.InputType("BookLikeCreateOrConnectWithoutBookInput", {
  isAbstract: true
})
export class BookLikeCreateOrConnectWithoutBookInput {
  @TypeGraphQL.Field(_type => BookLikeWhereUniqueInput, {
    nullable: false
  })
  where!: BookLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookLikeCreateWithoutBookInput, {
    nullable: false
  })
  create!: BookLikeCreateWithoutBookInput;
}
