import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReviewCreateWithoutUserInput } from "../inputs/ReviewCreateWithoutUserInput";
import { ReviewUpdateWithoutUserInput } from "../inputs/ReviewUpdateWithoutUserInput";
import { ReviewWhereUniqueInput } from "../inputs/ReviewWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReviewUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => ReviewWhereUniqueInput, {
    nullable: false
  })
  where!: ReviewWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReviewUpdateWithoutUserInput, {
    nullable: false
  })
  update!: ReviewUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => ReviewCreateWithoutUserInput, {
    nullable: false
  })
  create!: ReviewCreateWithoutUserInput;
}
