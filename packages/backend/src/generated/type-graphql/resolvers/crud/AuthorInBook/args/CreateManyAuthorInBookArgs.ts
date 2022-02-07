import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AuthorInBookCreateManyInput } from "../../../inputs/AuthorInBookCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAuthorInBookArgs {
  @TypeGraphQL.Field(_type => [AuthorInBookCreateManyInput], {
    nullable: false
  })
  data!: AuthorInBookCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
