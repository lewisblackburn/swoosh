import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActorInMovieUpdateManyMutationInput } from "../../../inputs/ActorInMovieUpdateManyMutationInput";
import { ActorInMovieWhereInput } from "../../../inputs/ActorInMovieWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyActorInMovieArgs {
  @TypeGraphQL.Field(_type => ActorInMovieUpdateManyMutationInput, {
    nullable: false
  })
  data!: ActorInMovieUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ActorInMovieWhereInput, {
    nullable: true
  })
  where?: ActorInMovieWhereInput | undefined;
}
