import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieUpdateManyWithoutRatingInput } from "../inputs/MovieUpdateManyWithoutRatingInput";
import { ShowUpdateManyWithoutRatingInput } from "../inputs/ShowUpdateManyWithoutRatingInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RatingUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  age?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => MovieUpdateManyWithoutRatingInput, {
    nullable: true
  })
  movies?: MovieUpdateManyWithoutRatingInput | undefined;

  @TypeGraphQL.Field(_type => ShowUpdateManyWithoutRatingInput, {
    nullable: true
  })
  shows?: ShowUpdateManyWithoutRatingInput | undefined;
}
