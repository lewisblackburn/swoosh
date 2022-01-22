import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowReviewLikeCreateWithoutUserInput } from "../inputs/ShowReviewLikeCreateWithoutUserInput";
import { ShowReviewLikeUpdateWithoutUserInput } from "../inputs/ShowReviewLikeUpdateWithoutUserInput";
import { ShowReviewLikeWhereUniqueInput } from "../inputs/ShowReviewLikeWhereUniqueInput";

@TypeGraphQL.InputType("ShowReviewLikeUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class ShowReviewLikeUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => ShowReviewLikeWhereUniqueInput, {
    nullable: false
  })
  where!: ShowReviewLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => ShowReviewLikeUpdateWithoutUserInput, {
    nullable: false
  })
  update!: ShowReviewLikeUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => ShowReviewLikeCreateWithoutUserInput, {
    nullable: false
  })
  create!: ShowReviewLikeCreateWithoutUserInput;
}
