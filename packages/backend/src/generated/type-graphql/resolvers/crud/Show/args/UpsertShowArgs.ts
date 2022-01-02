import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShowCreateInput } from "../../../inputs/ShowCreateInput";
import { ShowUpdateInput } from "../../../inputs/ShowUpdateInput";
import { ShowWhereUniqueInput } from "../../../inputs/ShowWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertShowArgs {
  @TypeGraphQL.Field(_type => ShowWhereUniqueInput, {
    nullable: false
  })
  where!: ShowWhereUniqueInput;

  @TypeGraphQL.Field(_type => ShowCreateInput, {
    nullable: false
  })
  create!: ShowCreateInput;

  @TypeGraphQL.Field(_type => ShowUpdateInput, {
    nullable: false
  })
  update!: ShowUpdateInput;
}
