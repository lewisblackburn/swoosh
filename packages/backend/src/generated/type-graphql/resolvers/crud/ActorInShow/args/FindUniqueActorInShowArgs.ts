import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActorInShowWhereUniqueInput } from "../../../inputs/ActorInShowWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueActorInShowArgs {
  @TypeGraphQL.Field(_type => ActorInShowWhereUniqueInput, {
    nullable: false
  })
  where!: ActorInShowWhereUniqueInput;
}
