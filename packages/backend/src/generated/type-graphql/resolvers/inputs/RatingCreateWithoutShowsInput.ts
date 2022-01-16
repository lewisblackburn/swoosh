import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateNestedManyWithoutRatingInput } from "../inputs/MovieCreateNestedManyWithoutRatingInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RatingCreateWithoutShowsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  age!: string;

  @TypeGraphQL.Field(_type => MovieCreateNestedManyWithoutRatingInput, {
    nullable: true
  })
  movies?: MovieCreateNestedManyWithoutRatingInput | undefined;
}
