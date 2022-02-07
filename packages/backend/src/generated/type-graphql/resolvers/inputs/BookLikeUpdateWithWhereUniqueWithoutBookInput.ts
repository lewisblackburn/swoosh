import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookLikeUpdateWithoutBookInput } from "../inputs/BookLikeUpdateWithoutBookInput";
import { BookLikeWhereUniqueInput } from "../inputs/BookLikeWhereUniqueInput";

@TypeGraphQL.InputType("BookLikeUpdateWithWhereUniqueWithoutBookInput", {
  isAbstract: true
})
export class BookLikeUpdateWithWhereUniqueWithoutBookInput {
  @TypeGraphQL.Field(_type => BookLikeWhereUniqueInput, {
    nullable: false
  })
  where!: BookLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookLikeUpdateWithoutBookInput, {
    nullable: false
  })
  data!: BookLikeUpdateWithoutBookInput;
}
