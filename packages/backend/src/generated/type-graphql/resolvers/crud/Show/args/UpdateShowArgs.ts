import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShowUpdateInput } from "../../../inputs/ShowUpdateInput";
import { ShowWhereUniqueInput } from "../../../inputs/ShowWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateShowArgs {
  @TypeGraphQL.Field(_type => ShowUpdateInput, {
    nullable: false
  })
  data!: ShowUpdateInput;

  @TypeGraphQL.Field(_type => ShowWhereUniqueInput, {
    nullable: false
  })
  where!: ShowWhereUniqueInput;
}
