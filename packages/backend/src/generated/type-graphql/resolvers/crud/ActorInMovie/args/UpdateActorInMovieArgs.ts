import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActorInMovieUpdateInput } from "../../../inputs/ActorInMovieUpdateInput";
import { ActorInMovieWhereUniqueInput } from "../../../inputs/ActorInMovieWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateActorInMovieArgs {
  @TypeGraphQL.Field(_type => ActorInMovieUpdateInput, {
    nullable: false
  })
  data!: ActorInMovieUpdateInput;

  @TypeGraphQL.Field(_type => ActorInMovieWhereUniqueInput, {
    nullable: false
  })
  where!: ActorInMovieWhereUniqueInput;
}
