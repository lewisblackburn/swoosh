import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReviewCreateManyShowInput } from "../inputs/ReviewCreateManyShowInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReviewCreateManyShowInputEnvelope {
  @TypeGraphQL.Field(_type => [ReviewCreateManyShowInput], {
    nullable: false
  })
  data!: ReviewCreateManyShowInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
