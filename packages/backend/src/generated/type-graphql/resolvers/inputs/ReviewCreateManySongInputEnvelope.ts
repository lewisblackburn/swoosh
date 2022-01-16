import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReviewCreateManySongInput } from "../inputs/ReviewCreateManySongInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReviewCreateManySongInputEnvelope {
  @TypeGraphQL.Field(_type => [ReviewCreateManySongInput], {
    nullable: false
  })
  data!: ReviewCreateManySongInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
