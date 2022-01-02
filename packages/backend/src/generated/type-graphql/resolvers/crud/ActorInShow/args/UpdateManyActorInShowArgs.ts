import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActorInShowUpdateManyMutationInput } from "../../../inputs/ActorInShowUpdateManyMutationInput";
import { ActorInShowWhereInput } from "../../../inputs/ActorInShowWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyActorInShowArgs {
  @TypeGraphQL.Field(_type => ActorInShowUpdateManyMutationInput, {
    nullable: false
  })
  data!: ActorInShowUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ActorInShowWhereInput, {
    nullable: true
  })
  where?: ActorInShowWhereInput | undefined;
}
