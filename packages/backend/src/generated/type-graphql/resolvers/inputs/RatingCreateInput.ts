import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateNestedManyWithoutRatingInput } from "../inputs/MovieCreateNestedManyWithoutRatingInput";
import { ShowCreateNestedManyWithoutRatingInput } from "../inputs/ShowCreateNestedManyWithoutRatingInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RatingCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  age!: string;

  @TypeGraphQL.Field(_type => MovieCreateNestedManyWithoutRatingInput, {
    nullable: true
  })
  movies?: MovieCreateNestedManyWithoutRatingInput | undefined;

  @TypeGraphQL.Field(_type => ShowCreateNestedManyWithoutRatingInput, {
    nullable: true
  })
  shows?: ShowCreateNestedManyWithoutRatingInput | undefined;
}
