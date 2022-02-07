import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookLikeWhereInput } from "../../../inputs/BookLikeWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyBookLikeArgs {
  @TypeGraphQL.Field(_type => BookLikeWhereInput, {
    nullable: true
  })
  where?: BookLikeWhereInput | undefined;
}
