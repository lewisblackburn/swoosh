import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateNestedOneWithoutReviewsInput } from "../inputs/BookCreateNestedOneWithoutReviewsInput";
import { MovieCreateNestedOneWithoutReviewsInput } from "../inputs/MovieCreateNestedOneWithoutReviewsInput";
import { ShowCreateNestedOneWithoutReviewsInput } from "../inputs/ShowCreateNestedOneWithoutReviewsInput";
import { UserCreateNestedOneWithoutReviewsInput } from "../inputs/UserCreateNestedOneWithoutReviewsInput";
import { VoteCreateNestedManyWithoutReviewInput } from "../inputs/VoteCreateNestedManyWithoutReviewInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReviewCreateWithoutSongInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  review!: string;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutReviewsInput, {
    nullable: true
  })
  user?: UserCreateNestedOneWithoutReviewsInput | undefined;

  @TypeGraphQL.Field(_type => MovieCreateNestedOneWithoutReviewsInput, {
    nullable: true
  })
  movie?: MovieCreateNestedOneWithoutReviewsInput | undefined;

  @TypeGraphQL.Field(_type => ShowCreateNestedOneWithoutReviewsInput, {
    nullable: true
  })
  show?: ShowCreateNestedOneWithoutReviewsInput | undefined;

  @TypeGraphQL.Field(_type => BookCreateNestedOneWithoutReviewsInput, {
    nullable: true
  })
  book?: BookCreateNestedOneWithoutReviewsInput | undefined;

  @TypeGraphQL.Field(_type => VoteCreateNestedManyWithoutReviewInput, {
    nullable: true
  })
  vote?: VoteCreateNestedManyWithoutReviewInput | undefined;
}
