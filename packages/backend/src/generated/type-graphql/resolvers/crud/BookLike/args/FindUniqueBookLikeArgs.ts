import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookLikeWhereUniqueInput } from "../../../inputs/BookLikeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueBookLikeArgs {
  @TypeGraphQL.Field(_type => BookLikeWhereUniqueInput, {
    nullable: false
  })
  where!: BookLikeWhereUniqueInput;
}
