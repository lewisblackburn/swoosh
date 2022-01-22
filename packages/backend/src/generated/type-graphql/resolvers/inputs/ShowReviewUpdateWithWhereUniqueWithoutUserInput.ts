import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowReviewUpdateWithoutUserInput } from "../inputs/ShowReviewUpdateWithoutUserInput";
import { ShowReviewWhereUniqueInput } from "../inputs/ShowReviewWhereUniqueInput";

@TypeGraphQL.InputType("ShowReviewUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class ShowReviewUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => ShowReviewWhereUniqueInput, {
    nullable: false
  })
  where!: ShowReviewWhereUniqueInput;

  @TypeGraphQL.Field(_type => ShowReviewUpdateWithoutUserInput, {
    nullable: false
  })
  data!: ShowReviewUpdateWithoutUserInput;
}
