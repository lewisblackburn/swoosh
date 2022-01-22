import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowReviewCreateWithoutShowInput } from "../inputs/ShowReviewCreateWithoutShowInput";
import { ShowReviewUpdateWithoutShowInput } from "../inputs/ShowReviewUpdateWithoutShowInput";
import { ShowReviewWhereUniqueInput } from "../inputs/ShowReviewWhereUniqueInput";

@TypeGraphQL.InputType("ShowReviewUpsertWithWhereUniqueWithoutShowInput", {
  isAbstract: true
})
export class ShowReviewUpsertWithWhereUniqueWithoutShowInput {
  @TypeGraphQL.Field(_type => ShowReviewWhereUniqueInput, {
    nullable: false
  })
  where!: ShowReviewWhereUniqueInput;

  @TypeGraphQL.Field(_type => ShowReviewUpdateWithoutShowInput, {
    nullable: false
  })
  update!: ShowReviewUpdateWithoutShowInput;

  @TypeGraphQL.Field(_type => ShowReviewCreateWithoutShowInput, {
    nullable: false
  })
  create!: ShowReviewCreateWithoutShowInput;
}
