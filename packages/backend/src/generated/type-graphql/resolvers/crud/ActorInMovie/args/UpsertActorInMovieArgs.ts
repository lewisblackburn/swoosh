import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActorInMovieCreateInput } from "../../../inputs/ActorInMovieCreateInput";
import { ActorInMovieUpdateInput } from "../../../inputs/ActorInMovieUpdateInput";
import { ActorInMovieWhereUniqueInput } from "../../../inputs/ActorInMovieWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertActorInMovieArgs {
  @TypeGraphQL.Field(_type => ActorInMovieWhereUniqueInput, {
    nullable: false
  })
  where!: ActorInMovieWhereUniqueInput;

  @TypeGraphQL.Field(_type => ActorInMovieCreateInput, {
    nullable: false
  })
  create!: ActorInMovieCreateInput;

  @TypeGraphQL.Field(_type => ActorInMovieUpdateInput, {
    nullable: false
  })
  update!: ActorInMovieUpdateInput;
}
