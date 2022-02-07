import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AuthorInBookUpdateManyMutationInput } from "../../../inputs/AuthorInBookUpdateManyMutationInput";
import { AuthorInBookWhereInput } from "../../../inputs/AuthorInBookWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyAuthorInBookArgs {
  @TypeGraphQL.Field(_type => AuthorInBookUpdateManyMutationInput, {
    nullable: false
  })
  data!: AuthorInBookUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => AuthorInBookWhereInput, {
    nullable: true
  })
  where?: AuthorInBookWhereInput | undefined;
}
