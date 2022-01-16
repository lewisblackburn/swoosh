import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReviewCreateWithoutBookInput } from "../inputs/ReviewCreateWithoutBookInput";
import { ReviewUpdateWithoutBookInput } from "../inputs/ReviewUpdateWithoutBookInput";
import { ReviewWhereUniqueInput } from "../inputs/ReviewWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReviewUpsertWithWhereUniqueWithoutBookInput {
  @TypeGraphQL.Field(_type => ReviewWhereUniqueInput, {
    nullable: false
  })
  where!: ReviewWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReviewUpdateWithoutBookInput, {
    nullable: false
  })
  update!: ReviewUpdateWithoutBookInput;

  @TypeGraphQL.Field(_type => ReviewCreateWithoutBookInput, {
    nullable: false
  })
  create!: ReviewCreateWithoutBookInput;
}
