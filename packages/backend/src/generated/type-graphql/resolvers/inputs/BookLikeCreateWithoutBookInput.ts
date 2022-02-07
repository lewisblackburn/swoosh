import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutLikedBooksInput } from "../inputs/UserCreateNestedOneWithoutLikedBooksInput";

@TypeGraphQL.InputType("BookLikeCreateWithoutBookInput", {
  isAbstract: true
})
export class BookLikeCreateWithoutBookInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutLikedBooksInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutLikedBooksInput;
}
