import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookLikeUpdateWithoutUserInput } from "../inputs/BookLikeUpdateWithoutUserInput";
import { BookLikeWhereUniqueInput } from "../inputs/BookLikeWhereUniqueInput";

@TypeGraphQL.InputType("BookLikeUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class BookLikeUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => BookLikeWhereUniqueInput, {
    nullable: false
  })
  where!: BookLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookLikeUpdateWithoutUserInput, {
    nullable: false
  })
  data!: BookLikeUpdateWithoutUserInput;
}
