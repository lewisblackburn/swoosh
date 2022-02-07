import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookLikeCreateInput } from "../../../inputs/BookLikeCreateInput";
import { BookLikeUpdateInput } from "../../../inputs/BookLikeUpdateInput";
import { BookLikeWhereUniqueInput } from "../../../inputs/BookLikeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertBookLikeArgs {
  @TypeGraphQL.Field(_type => BookLikeWhereUniqueInput, {
    nullable: false
  })
  where!: BookLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookLikeCreateInput, {
    nullable: false
  })
  create!: BookLikeCreateInput;

  @TypeGraphQL.Field(_type => BookLikeUpdateInput, {
    nullable: false
  })
  update!: BookLikeUpdateInput;
}
