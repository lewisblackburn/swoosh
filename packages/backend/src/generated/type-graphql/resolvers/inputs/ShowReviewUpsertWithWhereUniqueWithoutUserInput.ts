import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowReviewCreateWithoutUserInput } from "../inputs/ShowReviewCreateWithoutUserInput";
import { ShowReviewUpdateWithoutUserInput } from "../inputs/ShowReviewUpdateWithoutUserInput";
import { ShowReviewWhereUniqueInput } from "../inputs/ShowReviewWhereUniqueInput";

@TypeGraphQL.InputType("ShowReviewUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class ShowReviewUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => ShowReviewWhereUniqueInput, {
    nullable: false
  })
  where!: ShowReviewWhereUniqueInput;

  @TypeGraphQL.Field(_type => ShowReviewUpdateWithoutUserInput, {
    nullable: false
  })
  update!: ShowReviewUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => ShowReviewCreateWithoutUserInput, {
    nullable: false
  })
  create!: ShowReviewCreateWithoutUserInput;
}
