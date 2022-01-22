import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongReviewLikeCreateManySongReviewInput } from "../inputs/SongReviewLikeCreateManySongReviewInput";

@TypeGraphQL.InputType("SongReviewLikeCreateManySongReviewInputEnvelope", {
  isAbstract: true
})
export class SongReviewLikeCreateManySongReviewInputEnvelope {
  @TypeGraphQL.Field(_type => [SongReviewLikeCreateManySongReviewInput], {
    nullable: false
  })
  data!: SongReviewLikeCreateManySongReviewInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
