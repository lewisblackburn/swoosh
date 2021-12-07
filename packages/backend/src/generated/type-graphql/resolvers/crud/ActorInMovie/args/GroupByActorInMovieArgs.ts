import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActorInMovieOrderByWithAggregationInput } from "../../../inputs/ActorInMovieOrderByWithAggregationInput";
import { ActorInMovieScalarWhereWithAggregatesInput } from "../../../inputs/ActorInMovieScalarWhereWithAggregatesInput";
import { ActorInMovieWhereInput } from "../../../inputs/ActorInMovieWhereInput";
import { ActorInMovieScalarFieldEnum } from "../../../../enums/ActorInMovieScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByActorInMovieArgs {
  @TypeGraphQL.Field(_type => ActorInMovieWhereInput, {
    nullable: true
  })
  where?: ActorInMovieWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ActorInMovieOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ActorInMovieOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActorInMovieScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"movieId" | "personId" | "role">;

  @TypeGraphQL.Field(_type => ActorInMovieScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ActorInMovieScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
