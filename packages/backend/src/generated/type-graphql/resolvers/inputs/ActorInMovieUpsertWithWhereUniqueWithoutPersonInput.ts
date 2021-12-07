import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActorInMovieCreateWithoutPersonInput } from "../inputs/ActorInMovieCreateWithoutPersonInput";
import { ActorInMovieUpdateWithoutPersonInput } from "../inputs/ActorInMovieUpdateWithoutPersonInput";
import { ActorInMovieWhereUniqueInput } from "../inputs/ActorInMovieWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ActorInMovieUpsertWithWhereUniqueWithoutPersonInput {
  @TypeGraphQL.Field(_type => ActorInMovieWhereUniqueInput, {
    nullable: false
  })
  where!: ActorInMovieWhereUniqueInput;

  @TypeGraphQL.Field(_type => ActorInMovieUpdateWithoutPersonInput, {
    nullable: false
  })
  update!: ActorInMovieUpdateWithoutPersonInput;

  @TypeGraphQL.Field(_type => ActorInMovieCreateWithoutPersonInput, {
    nullable: false
  })
  create!: ActorInMovieCreateWithoutPersonInput;
}
