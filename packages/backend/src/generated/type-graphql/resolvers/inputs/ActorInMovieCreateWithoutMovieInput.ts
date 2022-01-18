import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateNestedOneWithoutMoviesInput } from "../inputs/PersonCreateNestedOneWithoutMoviesInput";

@TypeGraphQL.InputType("ActorInMovieCreateWithoutMovieInput", {
  isAbstract: true
})
export class ActorInMovieCreateWithoutMovieInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  role!: string;

  @TypeGraphQL.Field(_type => PersonCreateNestedOneWithoutMoviesInput, {
    nullable: false
  })
  person!: PersonCreateNestedOneWithoutMoviesInput;
}
