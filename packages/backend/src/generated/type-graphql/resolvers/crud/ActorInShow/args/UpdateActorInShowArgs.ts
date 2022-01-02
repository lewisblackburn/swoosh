import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActorInShowUpdateInput } from "../../../inputs/ActorInShowUpdateInput";
import { ActorInShowWhereUniqueInput } from "../../../inputs/ActorInShowWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateActorInShowArgs {
  @TypeGraphQL.Field(_type => ActorInShowUpdateInput, {
    nullable: false
  })
  data!: ActorInShowUpdateInput;

  @TypeGraphQL.Field(_type => ActorInShowWhereUniqueInput, {
    nullable: false
  })
  where!: ActorInShowWhereUniqueInput;
}
