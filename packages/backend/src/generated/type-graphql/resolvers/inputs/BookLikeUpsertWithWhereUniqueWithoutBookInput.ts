import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookLikeCreateWithoutBookInput } from "../inputs/BookLikeCreateWithoutBookInput";
import { BookLikeUpdateWithoutBookInput } from "../inputs/BookLikeUpdateWithoutBookInput";
import { BookLikeWhereUniqueInput } from "../inputs/BookLikeWhereUniqueInput";

@TypeGraphQL.InputType("BookLikeUpsertWithWhereUniqueWithoutBookInput", {
  isAbstract: true
})
export class BookLikeUpsertWithWhereUniqueWithoutBookInput {
  @TypeGraphQL.Field(_type => BookLikeWhereUniqueInput, {
    nullable: false
  })
  where!: BookLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookLikeUpdateWithoutBookInput, {
    nullable: false
  })
  update!: BookLikeUpdateWithoutBookInput;

  @TypeGraphQL.Field(_type => BookLikeCreateWithoutBookInput, {
    nullable: false
  })
  create!: BookLikeCreateWithoutBookInput;
}
