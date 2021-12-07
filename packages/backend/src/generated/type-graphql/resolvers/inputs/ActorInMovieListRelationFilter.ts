import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActorInMovieWhereInput } from "../inputs/ActorInMovieWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ActorInMovieListRelationFilter {
  @TypeGraphQL.Field(_type => ActorInMovieWhereInput, {
    nullable: true
  })
  every?: ActorInMovieWhereInput | undefined;

  @TypeGraphQL.Field(_type => ActorInMovieWhereInput, {
    nullable: true
  })
  some?: ActorInMovieWhereInput | undefined;

  @TypeGraphQL.Field(_type => ActorInMovieWhereInput, {
    nullable: true
  })
  none?: ActorInMovieWhereInput | undefined;
}
