import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateManyArtistInput } from "../inputs/SongCreateManyArtistInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SongCreateManyArtistInputEnvelope {
  @TypeGraphQL.Field(_type => [SongCreateManyArtistInput], {
    nullable: false
  })
  data!: SongCreateManyArtistInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
