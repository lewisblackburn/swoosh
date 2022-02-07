import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AuthorInBookCreateInput } from "../../../inputs/AuthorInBookCreateInput";

@TypeGraphQL.ArgsType()
export class CreateAuthorInBookArgs {
  @TypeGraphQL.Field(_type => AuthorInBookCreateInput, {
    nullable: false
  })
  data!: AuthorInBookCreateInput;
}
