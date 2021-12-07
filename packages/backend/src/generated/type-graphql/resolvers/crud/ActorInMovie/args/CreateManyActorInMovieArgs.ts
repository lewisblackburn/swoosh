import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActorInMovieCreateManyInput } from "../../../inputs/ActorInMovieCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyActorInMovieArgs {
  @TypeGraphQL.Field(_type => [ActorInMovieCreateManyInput], {
    nullable: false
  })
  data!: ActorInMovieCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
