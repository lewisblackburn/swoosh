import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AuthorInBookUpdateInput } from "../../../inputs/AuthorInBookUpdateInput";
import { AuthorInBookWhereUniqueInput } from "../../../inputs/AuthorInBookWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateAuthorInBookArgs {
  @TypeGraphQL.Field(_type => AuthorInBookUpdateInput, {
    nullable: false
  })
  data!: AuthorInBookUpdateInput;

  @TypeGraphQL.Field(_type => AuthorInBookWhereUniqueInput, {
    nullable: false
  })
  where!: AuthorInBookWhereUniqueInput;
}
