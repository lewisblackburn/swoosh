import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReviewCreateManyUserInput } from "../inputs/ReviewCreateManyUserInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReviewCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [ReviewCreateManyUserInput], {
    nullable: false
  })
  data!: ReviewCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
