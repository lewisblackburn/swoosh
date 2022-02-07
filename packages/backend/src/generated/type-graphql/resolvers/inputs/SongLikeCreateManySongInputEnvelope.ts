import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongLikeCreateManySongInput } from "../inputs/SongLikeCreateManySongInput";

@TypeGraphQL.InputType("SongLikeCreateManySongInputEnvelope", {
  isAbstract: true
})
export class SongLikeCreateManySongInputEnvelope {
  @TypeGraphQL.Field(_type => [SongLikeCreateManySongInput], {
    nullable: false
  })
  data!: SongLikeCreateManySongInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
