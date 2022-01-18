import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongInMovieCreateManySongInput } from "../inputs/SongInMovieCreateManySongInput";

@TypeGraphQL.InputType("SongInMovieCreateManySongInputEnvelope", {
  isAbstract: true
})
export class SongInMovieCreateManySongInputEnvelope {
  @TypeGraphQL.Field(_type => [SongInMovieCreateManySongInput], {
    nullable: false
  })
  data!: SongInMovieCreateManySongInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
