import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActorInShowCreateInput } from "../../../inputs/ActorInShowCreateInput";
import { ActorInShowUpdateInput } from "../../../inputs/ActorInShowUpdateInput";
import { ActorInShowWhereUniqueInput } from "../../../inputs/ActorInShowWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertActorInShowArgs {
  @TypeGraphQL.Field(_type => ActorInShowWhereUniqueInput, {
    nullable: false
  })
  where!: ActorInShowWhereUniqueInput;

  @TypeGraphQL.Field(_type => ActorInShowCreateInput, {
    nullable: false
  })
  create!: ActorInShowCreateInput;

  @TypeGraphQL.Field(_type => ActorInShowUpdateInput, {
    nullable: false
  })
  update!: ActorInShowUpdateInput;
}
