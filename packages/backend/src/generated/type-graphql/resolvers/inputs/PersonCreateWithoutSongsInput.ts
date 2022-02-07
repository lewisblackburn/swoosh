import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActorInMovieCreateNestedManyWithoutPersonInput } from "../inputs/ActorInMovieCreateNestedManyWithoutPersonInput";
import { ActorInShowCreateNestedManyWithoutPersonInput } from "../inputs/ActorInShowCreateNestedManyWithoutPersonInput";
import { AuthorInBookCreateNestedManyWithoutPersonInput } from "../inputs/AuthorInBookCreateNestedManyWithoutPersonInput";
import { PersonCreatecareerInput } from "../inputs/PersonCreatecareerInput";

@TypeGraphQL.InputType("PersonCreateWithoutSongsInput", {
  isAbstract: true
})
export class PersonCreateWithoutSongsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  poster?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  locked?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  bio?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  age?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => PersonCreatecareerInput, {
    nullable: true
  })
  career?: PersonCreatecareerInput | undefined;

  @TypeGraphQL.Field(_type => ActorInMovieCreateNestedManyWithoutPersonInput, {
    nullable: true
  })
  movies?: ActorInMovieCreateNestedManyWithoutPersonInput | undefined;

  @TypeGraphQL.Field(_type => ActorInShowCreateNestedManyWithoutPersonInput, {
    nullable: true
  })
  shows?: ActorInShowCreateNestedManyWithoutPersonInput | undefined;

  @TypeGraphQL.Field(_type => AuthorInBookCreateNestedManyWithoutPersonInput, {
    nullable: true
  })
  books?: AuthorInBookCreateNestedManyWithoutPersonInput | undefined;
}
