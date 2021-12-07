import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateNestedOneWithoutActorsInput } from "../inputs/MovieCreateNestedOneWithoutActorsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ActorInMovieCreateWithoutPersonInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  role!: string;

  @TypeGraphQL.Field(_type => MovieCreateNestedOneWithoutActorsInput, {
    nullable: false
  })
  movie!: MovieCreateNestedOneWithoutActorsInput;
}
