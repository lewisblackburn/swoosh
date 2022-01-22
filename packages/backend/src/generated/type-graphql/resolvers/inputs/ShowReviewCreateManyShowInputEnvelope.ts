import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowReviewCreateManyShowInput } from "../inputs/ShowReviewCreateManyShowInput";

@TypeGraphQL.InputType("ShowReviewCreateManyShowInputEnvelope", {
  isAbstract: true
})
export class ShowReviewCreateManyShowInputEnvelope {
  @TypeGraphQL.Field(_type => [ShowReviewCreateManyShowInput], {
    nullable: false
  })
  data!: ShowReviewCreateManyShowInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
