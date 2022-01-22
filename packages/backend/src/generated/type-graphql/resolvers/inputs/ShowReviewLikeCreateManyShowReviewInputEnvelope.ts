import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowReviewLikeCreateManyShowReviewInput } from "../inputs/ShowReviewLikeCreateManyShowReviewInput";

@TypeGraphQL.InputType("ShowReviewLikeCreateManyShowReviewInputEnvelope", {
  isAbstract: true
})
export class ShowReviewLikeCreateManyShowReviewInputEnvelope {
  @TypeGraphQL.Field(_type => [ShowReviewLikeCreateManyShowReviewInput], {
    nullable: false
  })
  data!: ShowReviewLikeCreateManyShowReviewInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
