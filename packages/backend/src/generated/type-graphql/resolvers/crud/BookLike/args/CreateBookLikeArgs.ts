import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookLikeCreateInput } from "../../../inputs/BookLikeCreateInput";

@TypeGraphQL.ArgsType()
export class CreateBookLikeArgs {
  @TypeGraphQL.Field(_type => BookLikeCreateInput, {
    nullable: false
  })
  data!: BookLikeCreateInput;
}
