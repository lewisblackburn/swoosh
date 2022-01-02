import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShowCreateInput } from "../../../inputs/ShowCreateInput";

@TypeGraphQL.ArgsType()
export class CreateShowArgs {
  @TypeGraphQL.Field(_type => ShowCreateInput, {
    nullable: false
  })
  data!: ShowCreateInput;
}
