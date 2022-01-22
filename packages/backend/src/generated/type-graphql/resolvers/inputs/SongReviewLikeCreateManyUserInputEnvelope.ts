import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongReviewLikeCreateManyUserInput } from "../inputs/SongReviewLikeCreateManyUserInput";

@TypeGraphQL.InputType("SongReviewLikeCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class SongReviewLikeCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [SongReviewLikeCreateManyUserInput], {
    nullable: false
  })
  data!: SongReviewLikeCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
