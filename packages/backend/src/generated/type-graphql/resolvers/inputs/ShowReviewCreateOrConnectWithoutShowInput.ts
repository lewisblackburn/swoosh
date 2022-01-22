import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowReviewCreateWithoutShowInput } from "../inputs/ShowReviewCreateWithoutShowInput";
import { ShowReviewWhereUniqueInput } from "../inputs/ShowReviewWhereUniqueInput";

@TypeGraphQL.InputType("ShowReviewCreateOrConnectWithoutShowInput", {
  isAbstract: true
})
export class ShowReviewCreateOrConnectWithoutShowInput {
  @TypeGraphQL.Field(_type => ShowReviewWhereUniqueInput, {
    nullable: false
  })
  where!: ShowReviewWhereUniqueInput;

  @TypeGraphQL.Field(_type => ShowReviewCreateWithoutShowInput, {
    nullable: false
  })
  create!: ShowReviewCreateWithoutShowInput;
}
