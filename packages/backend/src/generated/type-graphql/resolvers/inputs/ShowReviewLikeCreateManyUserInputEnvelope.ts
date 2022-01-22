import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowReviewLikeCreateManyUserInput } from "../inputs/ShowReviewLikeCreateManyUserInput";

@TypeGraphQL.InputType("ShowReviewLikeCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class ShowReviewLikeCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [ShowReviewLikeCreateManyUserInput], {
    nullable: false
  })
  data!: ShowReviewLikeCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
