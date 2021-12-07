import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActorInMovieWhereUniqueInput } from "../../../inputs/ActorInMovieWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteActorInMovieArgs {
  @TypeGraphQL.Field(_type => ActorInMovieWhereUniqueInput, {
    nullable: false
  })
  where!: ActorInMovieWhereUniqueInput;
}
