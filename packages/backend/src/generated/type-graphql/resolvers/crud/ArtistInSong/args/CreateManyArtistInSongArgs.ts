import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArtistInSongCreateManyInput } from "../../../inputs/ArtistInSongCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyArtistInSongArgs {
  @TypeGraphQL.Field(_type => [ArtistInSongCreateManyInput], {
    nullable: false
  })
  data!: ArtistInSongCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
