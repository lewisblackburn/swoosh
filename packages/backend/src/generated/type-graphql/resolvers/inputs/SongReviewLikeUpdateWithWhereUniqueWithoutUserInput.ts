import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongReviewLikeUpdateWithoutUserInput } from "../inputs/SongReviewLikeUpdateWithoutUserInput";
import { SongReviewLikeWhereUniqueInput } from "../inputs/SongReviewLikeWhereUniqueInput";

@TypeGraphQL.InputType("SongReviewLikeUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class SongReviewLikeUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => SongReviewLikeWhereUniqueInput, {
    nullable: false
  })
  where!: SongReviewLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongReviewLikeUpdateWithoutUserInput, {
    nullable: false
  })
  data!: SongReviewLikeUpdateWithoutUserInput;
}
