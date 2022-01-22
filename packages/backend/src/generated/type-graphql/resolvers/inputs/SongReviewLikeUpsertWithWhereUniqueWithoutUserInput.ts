import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongReviewLikeCreateWithoutUserInput } from "../inputs/SongReviewLikeCreateWithoutUserInput";
import { SongReviewLikeUpdateWithoutUserInput } from "../inputs/SongReviewLikeUpdateWithoutUserInput";
import { SongReviewLikeWhereUniqueInput } from "../inputs/SongReviewLikeWhereUniqueInput";

@TypeGraphQL.InputType("SongReviewLikeUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class SongReviewLikeUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => SongReviewLikeWhereUniqueInput, {
    nullable: false
  })
  where!: SongReviewLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongReviewLikeUpdateWithoutUserInput, {
    nullable: false
  })
  update!: SongReviewLikeUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => SongReviewLikeCreateWithoutUserInput, {
    nullable: false
  })
  create!: SongReviewLikeCreateWithoutUserInput;
}
