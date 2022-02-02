import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MovieUpdateOneRequiredWithoutLikesInput } from "../inputs/MovieUpdateOneRequiredWithoutLikesInput";
import { UserUpdateOneRequiredWithoutLikedMoviesInput } from "../inputs/UserUpdateOneRequiredWithoutLikedMoviesInput";

@TypeGraphQL.InputType("MovieLikeUpdateInput", {
  isAbstract: true
})
export class MovieLikeUpdateInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutLikedMoviesInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutLikedMoviesInput | undefined;

  @TypeGraphQL.Field(_type => MovieUpdateOneRequiredWithoutLikesInput, {
    nullable: true
  })
  movie?: MovieUpdateOneRequiredWithoutLikesInput | undefined;
}
