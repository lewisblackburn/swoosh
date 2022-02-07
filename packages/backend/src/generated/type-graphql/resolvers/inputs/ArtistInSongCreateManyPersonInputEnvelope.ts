import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArtistInSongCreateManyPersonInput } from "../inputs/ArtistInSongCreateManyPersonInput";

@TypeGraphQL.InputType("ArtistInSongCreateManyPersonInputEnvelope", {
  isAbstract: true
})
export class ArtistInSongCreateManyPersonInputEnvelope {
  @TypeGraphQL.Field(_type => [ArtistInSongCreateManyPersonInput], {
    nullable: false
  })
  data!: ArtistInSongCreateManyPersonInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
