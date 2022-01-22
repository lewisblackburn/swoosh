import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongReviewCreateOrConnectWithoutLikesInput } from "../inputs/SongReviewCreateOrConnectWithoutLikesInput";
import { SongReviewCreateWithoutLikesInput } from "../inputs/SongReviewCreateWithoutLikesInput";
import { SongReviewWhereUniqueInput } from "../inputs/SongReviewWhereUniqueInput";

@TypeGraphQL.InputType("SongReviewCreateNestedOneWithoutLikesInput", {
  isAbstract: true
})
export class SongReviewCreateNestedOneWithoutLikesInput {
  @TypeGraphQL.Field(_type => SongReviewCreateWithoutLikesInput, {
    nullable: true
  })
  create?: SongReviewCreateWithoutLikesInput | undefined;

  @TypeGraphQL.Field(_type => SongReviewCreateOrConnectWithoutLikesInput, {
    nullable: true
  })
  connectOrCreate?: SongReviewCreateOrConnectWithoutLikesInput | undefined;

  @TypeGraphQL.Field(_type => SongReviewWhereUniqueInput, {
    nullable: true
  })
  connect?: SongReviewWhereUniqueInput | undefined;
}
