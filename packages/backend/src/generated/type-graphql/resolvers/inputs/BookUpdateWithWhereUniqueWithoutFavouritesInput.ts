import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookUpdateWithoutFavouritesInput } from "../inputs/BookUpdateWithoutFavouritesInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BookUpdateWithWhereUniqueWithoutFavouritesInput {
  @TypeGraphQL.Field(_type => BookWhereUniqueInput, {
    nullable: false
  })
  where!: BookWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookUpdateWithoutFavouritesInput, {
    nullable: false
  })
  data!: BookUpdateWithoutFavouritesInput;
}
