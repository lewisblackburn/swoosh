import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShowWhereInput } from "../../../inputs/ShowWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyShowArgs {
  @TypeGraphQL.Field(_type => ShowWhereInput, {
    nullable: true
  })
  where?: ShowWhereInput | undefined;
}
