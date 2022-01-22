import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongReviewLikeCreateManyUserInputEnvelope } from "../inputs/SongReviewLikeCreateManyUserInputEnvelope";
import { SongReviewLikeCreateOrConnectWithoutUserInput } from "../inputs/SongReviewLikeCreateOrConnectWithoutUserInput";
import { SongReviewLikeCreateWithoutUserInput } from "../inputs/SongReviewLikeCreateWithoutUserInput";
import { SongReviewLikeWhereUniqueInput } from "../inputs/SongReviewLikeWhereUniqueInput";

@TypeGraphQL.InputType("SongReviewLikeCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class SongReviewLikeCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [SongReviewLikeCreateWithoutUserInput], {
    nullable: true
  })
  create?: SongReviewLikeCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongReviewLikeCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: SongReviewLikeCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => SongReviewLikeCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: SongReviewLikeCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SongReviewLikeWhereUniqueInput], {
    nullable: true
  })
  connect?: SongReviewLikeWhereUniqueInput[] | undefined;
}
