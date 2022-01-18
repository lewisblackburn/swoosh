import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActorInMovieCreateWithoutMovieInput } from "../inputs/ActorInMovieCreateWithoutMovieInput";
import { ActorInMovieWhereUniqueInput } from "../inputs/ActorInMovieWhereUniqueInput";

@TypeGraphQL.InputType("ActorInMovieCreateOrConnectWithoutMovieInput", {
  isAbstract: true
})
export class ActorInMovieCreateOrConnectWithoutMovieInput {
  @TypeGraphQL.Field(_type => ActorInMovieWhereUniqueInput, {
    nullable: false
  })
  where!: ActorInMovieWhereUniqueInput;

  @TypeGraphQL.Field(_type => ActorInMovieCreateWithoutMovieInput, {
    nullable: false
  })
  create!: ActorInMovieCreateWithoutMovieInput;
}
