import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReviewCreateManyBookInput } from "../inputs/ReviewCreateManyBookInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReviewCreateManyBookInputEnvelope {
  @TypeGraphQL.Field(_type => [ReviewCreateManyBookInput], {
    nullable: false
  })
  data!: ReviewCreateManyBookInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
