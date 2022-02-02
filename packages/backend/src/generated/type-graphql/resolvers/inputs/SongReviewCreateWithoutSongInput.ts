import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongReviewLikeCreateNestedManyWithoutSongReviewInput } from "../inputs/SongReviewLikeCreateNestedManyWithoutSongReviewInput";
import { UserCreateNestedOneWithoutSongReviewsInput } from "../inputs/UserCreateNestedOneWithoutSongReviewsInput";

@TypeGraphQL.InputType("SongReviewCreateWithoutSongInput", {
  isAbstract: true
})
export class SongReviewCreateWithoutSongInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  review?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  rating!: number;

  @TypeGraphQL.Field(_type => SongReviewLikeCreateNestedManyWithoutSongReviewInput, {
    nullable: true
  })
  likes?: SongReviewLikeCreateNestedManyWithoutSongReviewInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutSongReviewsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutSongReviewsInput;
}
