import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArtistInSongCreateManySongInput } from "../inputs/ArtistInSongCreateManySongInput";

@TypeGraphQL.InputType("ArtistInSongCreateManySongInputEnvelope", {
  isAbstract: true
})
export class ArtistInSongCreateManySongInputEnvelope {
  @TypeGraphQL.Field(_type => [ArtistInSongCreateManySongInput], {
    nullable: false
  })
  data!: ArtistInSongCreateManySongInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
