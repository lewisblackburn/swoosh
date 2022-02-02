import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateNestedOneWithoutReviewsInput } from "../inputs/SongCreateNestedOneWithoutReviewsInput";
import { UserCreateNestedOneWithoutSongReviewsInput } from "../inputs/UserCreateNestedOneWithoutSongReviewsInput";

@TypeGraphQL.InputType("SongReviewCreateWithoutLikesInput", {
  isAbstract: true
})
export class SongReviewCreateWithoutLikesInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  review?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  rating!: number;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutSongReviewsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutSongReviewsInput;

  @TypeGraphQL.Field(_type => SongCreateNestedOneWithoutReviewsInput, {
    nullable: false
  })
  song!: SongCreateNestedOneWithoutReviewsInput;
}
