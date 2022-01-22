import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowReviewCreateManyUserInput } from "../inputs/ShowReviewCreateManyUserInput";

@TypeGraphQL.InputType("ShowReviewCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class ShowReviewCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [ShowReviewCreateManyUserInput], {
    nullable: false
  })
  data!: ShowReviewCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
