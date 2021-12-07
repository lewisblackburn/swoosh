import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActorInMovieWhereInput } from "../../../inputs/ActorInMovieWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyActorInMovieArgs {
  @TypeGraphQL.Field(_type => ActorInMovieWhereInput, {
    nullable: true
  })
  where?: ActorInMovieWhereInput | undefined;
}
