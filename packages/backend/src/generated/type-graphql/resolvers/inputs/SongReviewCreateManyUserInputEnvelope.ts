import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongReviewCreateManyUserInput } from "../inputs/SongReviewCreateManyUserInput";

@TypeGraphQL.InputType("SongReviewCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class SongReviewCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [SongReviewCreateManyUserInput], {
    nullable: false
  })
  data!: SongReviewCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
