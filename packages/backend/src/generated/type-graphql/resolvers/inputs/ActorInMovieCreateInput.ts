import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateNestedOneWithoutActorsInput } from "../inputs/MovieCreateNestedOneWithoutActorsInput";
import { PersonCreateNestedOneWithoutMoviesInput } from "../inputs/PersonCreateNestedOneWithoutMoviesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ActorInMovieCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  role!: string;

  @TypeGraphQL.Field(_type => MovieCreateNestedOneWithoutActorsInput, {
    nullable: false
  })
  movie!: MovieCreateNestedOneWithoutActorsInput;

  @TypeGraphQL.Field(_type => PersonCreateNestedOneWithoutMoviesInput, {
    nullable: false
  })
  person!: PersonCreateNestedOneWithoutMoviesInput;
}
