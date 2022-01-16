import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookUpdateOneWithoutReviewsInput } from "../inputs/BookUpdateOneWithoutReviewsInput";
import { MovieUpdateOneWithoutReviewsInput } from "../inputs/MovieUpdateOneWithoutReviewsInput";
import { ShowUpdateOneWithoutReviewsInput } from "../inputs/ShowUpdateOneWithoutReviewsInput";
import { SongUpdateOneWithoutReviewsInput } from "../inputs/SongUpdateOneWithoutReviewsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { VoteUpdateManyWithoutReviewInput } from "../inputs/VoteUpdateManyWithoutReviewInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReviewUpdateWithoutUserInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  review?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => MovieUpdateOneWithoutReviewsInput, {
    nullable: true
  })
  movie?: MovieUpdateOneWithoutReviewsInput | undefined;

  @TypeGraphQL.Field(_type => ShowUpdateOneWithoutReviewsInput, {
    nullable: true
  })
  show?: ShowUpdateOneWithoutReviewsInput | undefined;

  @TypeGraphQL.Field(_type => BookUpdateOneWithoutReviewsInput, {
    nullable: true
  })
  book?: BookUpdateOneWithoutReviewsInput | undefined;

  @TypeGraphQL.Field(_type => SongUpdateOneWithoutReviewsInput, {
    nullable: true
  })
  song?: SongUpdateOneWithoutReviewsInput | undefined;

  @TypeGraphQL.Field(_type => VoteUpdateManyWithoutReviewInput, {
    nullable: true
  })
  vote?: VoteUpdateManyWithoutReviewInput | undefined;
}
