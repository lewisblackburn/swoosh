import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowReviewLikeUpdateWithoutUserInput } from "../inputs/ShowReviewLikeUpdateWithoutUserInput";
import { ShowReviewLikeWhereUniqueInput } from "../inputs/ShowReviewLikeWhereUniqueInput";

@TypeGraphQL.InputType("ShowReviewLikeUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class ShowReviewLikeUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => ShowReviewLikeWhereUniqueInput, {
    nullable: false
  })
  where!: ShowReviewLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => ShowReviewLikeUpdateWithoutUserInput, {
    nullable: false
  })
  data!: ShowReviewLikeUpdateWithoutUserInput;
}
