import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AuthorInBookWhereInput } from "../../../inputs/AuthorInBookWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyAuthorInBookArgs {
  @TypeGraphQL.Field(_type => AuthorInBookWhereInput, {
    nullable: true
  })
  where?: AuthorInBookWhereInput | undefined;
}
