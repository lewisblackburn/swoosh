import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VoteCreateManyReviewInput } from "../inputs/VoteCreateManyReviewInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class VoteCreateManyReviewInputEnvelope {
  @TypeGraphQL.Field(_type => [VoteCreateManyReviewInput], {
    nullable: false
  })
  data!: VoteCreateManyReviewInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
