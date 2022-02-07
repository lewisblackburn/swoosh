import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookLikeCreateWithoutUserInput } from "../inputs/BookLikeCreateWithoutUserInput";
import { BookLikeUpdateWithoutUserInput } from "../inputs/BookLikeUpdateWithoutUserInput";
import { BookLikeWhereUniqueInput } from "../inputs/BookLikeWhereUniqueInput";

@TypeGraphQL.InputType("BookLikeUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class BookLikeUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => BookLikeWhereUniqueInput, {
    nullable: false
  })
  where!: BookLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookLikeUpdateWithoutUserInput, {
    nullable: false
  })
  update!: BookLikeUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => BookLikeCreateWithoutUserInput, {
    nullable: false
  })
  create!: BookLikeCreateWithoutUserInput;
}
