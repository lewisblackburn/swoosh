import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookLikeWhereInput } from "../inputs/BookLikeWhereInput";

@TypeGraphQL.InputType("BookLikeListRelationFilter", {
  isAbstract: true
})
export class BookLikeListRelationFilter {
  @TypeGraphQL.Field(_type => BookLikeWhereInput, {
    nullable: true
  })
  every?: BookLikeWhereInput | undefined;

  @TypeGraphQL.Field(_type => BookLikeWhereInput, {
    nullable: true
  })
  some?: BookLikeWhereInput | undefined;

  @TypeGraphQL.Field(_type => BookLikeWhereInput, {
    nullable: true
  })
  none?: BookLikeWhereInput | undefined;
}
