import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowReviewUpdateWithoutShowInput } from "../inputs/ShowReviewUpdateWithoutShowInput";
import { ShowReviewWhereUniqueInput } from "../inputs/ShowReviewWhereUniqueInput";

@TypeGraphQL.InputType("ShowReviewUpdateWithWhereUniqueWithoutShowInput", {
  isAbstract: true
})
export class ShowReviewUpdateWithWhereUniqueWithoutShowInput {
  @TypeGraphQL.Field(_type => ShowReviewWhereUniqueInput, {
    nullable: false
  })
  where!: ShowReviewWhereUniqueInput;

  @TypeGraphQL.Field(_type => ShowReviewUpdateWithoutShowInput, {
    nullable: false
  })
  data!: ShowReviewUpdateWithoutShowInput;
}
