import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShowWhereUniqueInput } from "../../../inputs/ShowWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteShowArgs {
  @TypeGraphQL.Field(_type => ShowWhereUniqueInput, {
    nullable: false
  })
  where!: ShowWhereUniqueInput;
}
