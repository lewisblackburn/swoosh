import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActorInShowWhereInput } from "../../../inputs/ActorInShowWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyActorInShowArgs {
  @TypeGraphQL.Field(_type => ActorInShowWhereInput, {
    nullable: true
  })
  where?: ActorInShowWhereInput | undefined;
}
