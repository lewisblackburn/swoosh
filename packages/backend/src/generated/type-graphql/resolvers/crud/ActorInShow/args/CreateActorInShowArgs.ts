import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActorInShowCreateInput } from "../../../inputs/ActorInShowCreateInput";

@TypeGraphQL.ArgsType()
export class CreateActorInShowArgs {
  @TypeGraphQL.Field(_type => ActorInShowCreateInput, {
    nullable: false
  })
  data!: ActorInShowCreateInput;
}
