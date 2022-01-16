import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReviewCreateManyMovieInput } from "../inputs/ReviewCreateManyMovieInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReviewCreateManyMovieInputEnvelope {
  @TypeGraphQL.Field(_type => [ReviewCreateManyMovieInput], {
    nullable: false
  })
  data!: ReviewCreateManyMovieInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
