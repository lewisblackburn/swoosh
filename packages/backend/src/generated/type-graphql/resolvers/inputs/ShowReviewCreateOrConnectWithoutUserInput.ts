import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowReviewCreateWithoutUserInput } from "../inputs/ShowReviewCreateWithoutUserInput";
import { ShowReviewWhereUniqueInput } from "../inputs/ShowReviewWhereUniqueInput";

@TypeGraphQL.InputType("ShowReviewCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class ShowReviewCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => ShowReviewWhereUniqueInput, {
    nullable: false
  })
  where!: ShowReviewWhereUniqueInput;

  @TypeGraphQL.Field(_type => ShowReviewCreateWithoutUserInput, {
    nullable: false
  })
  create!: ShowReviewCreateWithoutUserInput;
}
