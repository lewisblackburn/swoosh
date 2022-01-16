import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieUpdateManyWithoutRatingInput } from "../inputs/MovieUpdateManyWithoutRatingInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RatingUpdateWithoutShowsInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  age?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => MovieUpdateManyWithoutRatingInput, {
    nullable: true
  })
  movies?: MovieUpdateManyWithoutRatingInput | undefined;
}
