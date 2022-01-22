import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongReviewCreateManySongInput } from "../inputs/SongReviewCreateManySongInput";

@TypeGraphQL.InputType("SongReviewCreateManySongInputEnvelope", {
  isAbstract: true
})
export class SongReviewCreateManySongInputEnvelope {
  @TypeGraphQL.Field(_type => [SongReviewCreateManySongInput], {
    nullable: false
  })
  data!: SongReviewCreateManySongInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
