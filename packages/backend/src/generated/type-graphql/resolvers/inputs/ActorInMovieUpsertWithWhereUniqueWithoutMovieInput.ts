import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActorInMovieCreateWithoutMovieInput } from "../inputs/ActorInMovieCreateWithoutMovieInput";
import { ActorInMovieUpdateWithoutMovieInput } from "../inputs/ActorInMovieUpdateWithoutMovieInput";
import { ActorInMovieWhereUniqueInput } from "../inputs/ActorInMovieWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ActorInMovieUpsertWithWhereUniqueWithoutMovieInput {
  @TypeGraphQL.Field(_type => ActorInMovieWhereUniqueInput, {
    nullable: false
  })
  where!: ActorInMovieWhereUniqueInput;

  @TypeGraphQL.Field(_type => ActorInMovieUpdateWithoutMovieInput, {
    nullable: false
  })
  update!: ActorInMovieUpdateWithoutMovieInput;

  @TypeGraphQL.Field(_type => ActorInMovieCreateWithoutMovieInput, {
    nullable: false
  })
  create!: ActorInMovieCreateWithoutMovieInput;
}
