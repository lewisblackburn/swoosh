import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActorInMovieOrderByWithRelationInput } from "../../../inputs/ActorInMovieOrderByWithRelationInput";
import { ActorInMovieWhereInput } from "../../../inputs/ActorInMovieWhereInput";
import { ActorInMovieWhereUniqueInput } from "../../../inputs/ActorInMovieWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateActorInMovieArgs {
  @TypeGraphQL.Field(_type => ActorInMovieWhereInput, {
    nullable: true
  })
  where?: ActorInMovieWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ActorInMovieOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ActorInMovieOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ActorInMovieWhereUniqueInput, {
    nullable: true
  })
  cursor?: ActorInMovieWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
