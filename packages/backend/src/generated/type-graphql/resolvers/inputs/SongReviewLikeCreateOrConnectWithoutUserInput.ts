import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongReviewLikeCreateWithoutUserInput } from "../inputs/SongReviewLikeCreateWithoutUserInput";
import { SongReviewLikeWhereUniqueInput } from "../inputs/SongReviewLikeWhereUniqueInput";

@TypeGraphQL.InputType("SongReviewLikeCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class SongReviewLikeCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => SongReviewLikeWhereUniqueInput, {
    nullable: false
  })
  where!: SongReviewLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongReviewLikeCreateWithoutUserInput, {
    nullable: false
  })
  create!: SongReviewLikeCreateWithoutUserInput;
}
