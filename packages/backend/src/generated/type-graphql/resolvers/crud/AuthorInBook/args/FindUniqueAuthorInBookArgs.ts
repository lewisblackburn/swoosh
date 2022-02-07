import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AuthorInBookWhereUniqueInput } from "../../../inputs/AuthorInBookWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueAuthorInBookArgs {
  @TypeGraphQL.Field(_type => AuthorInBookWhereUniqueInput, {
    nullable: false
  })
  where!: AuthorInBookWhereUniqueInput;
}
