import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowCreateWithoutReviewsInput } from "../inputs/ShowCreateWithoutReviewsInput";
import { ShowUpdateWithoutReviewsInput } from "../inputs/ShowUpdateWithoutReviewsInput";

@TypeGraphQL.InputType("ShowUpsertWithoutReviewsInput", {
  isAbstract: true
})
export class ShowUpsertWithoutReviewsInput {
  @TypeGraphQL.Field(_type => ShowUpdateWithoutReviewsInput, {
    nullable: false
  })
  update!: ShowUpdateWithoutReviewsInput;

  @TypeGraphQL.Field(_type => ShowCreateWithoutReviewsInput, {
    nullable: false
  })
  create!: ShowCreateWithoutReviewsInput;
}
