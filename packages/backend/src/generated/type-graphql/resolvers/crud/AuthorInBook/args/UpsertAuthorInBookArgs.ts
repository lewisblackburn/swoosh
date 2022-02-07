import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AuthorInBookCreateInput } from "../../../inputs/AuthorInBookCreateInput";
import { AuthorInBookUpdateInput } from "../../../inputs/AuthorInBookUpdateInput";
import { AuthorInBookWhereUniqueInput } from "../../../inputs/AuthorInBookWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertAuthorInBookArgs {
  @TypeGraphQL.Field(_type => AuthorInBookWhereUniqueInput, {
    nullable: false
  })
  where!: AuthorInBookWhereUniqueInput;

  @TypeGraphQL.Field(_type => AuthorInBookCreateInput, {
    nullable: false
  })
  create!: AuthorInBookCreateInput;

  @TypeGraphQL.Field(_type => AuthorInBookUpdateInput, {
    nullable: false
  })
  update!: AuthorInBookUpdateInput;
}
