import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActorInMoviePersonIdMovieIdCompoundUniqueInput } from "../inputs/ActorInMoviePersonIdMovieIdCompoundUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ActorInMovieWhereUniqueInput {
  @TypeGraphQL.Field(_type => ActorInMoviePersonIdMovieIdCompoundUniqueInput, {
    nullable: true
  })
  personId_movieId?: ActorInMoviePersonIdMovieIdCompoundUniqueInput | undefined;
}
