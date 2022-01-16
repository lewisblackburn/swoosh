import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReviewCreateWithoutVoteInput } from "../inputs/ReviewCreateWithoutVoteInput";
import { ReviewUpdateWithoutVoteInput } from "../inputs/ReviewUpdateWithoutVoteInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReviewUpsertWithoutVoteInput {
  @TypeGraphQL.Field(_type => ReviewUpdateWithoutVoteInput, {
    nullable: false
  })
  update!: ReviewUpdateWithoutVoteInput;

  @TypeGraphQL.Field(_type => ReviewCreateWithoutVoteInput, {
    nullable: false
  })
  create!: ReviewCreateWithoutVoteInput;
}
