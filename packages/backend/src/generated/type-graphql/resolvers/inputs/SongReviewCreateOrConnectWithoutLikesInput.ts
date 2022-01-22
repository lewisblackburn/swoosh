import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongReviewCreateWithoutLikesInput } from "../inputs/SongReviewCreateWithoutLikesInput";
import { SongReviewWhereUniqueInput } from "../inputs/SongReviewWhereUniqueInput";

@TypeGraphQL.InputType("SongReviewCreateOrConnectWithoutLikesInput", {
  isAbstract: true
})
export class SongReviewCreateOrConnectWithoutLikesInput {
  @TypeGraphQL.Field(_type => SongReviewWhereUniqueInput, {
    nullable: false
  })
  where!: SongReviewWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongReviewCreateWithoutLikesInput, {
    nullable: false
  })
  create!: SongReviewCreateWithoutLikesInput;
}
