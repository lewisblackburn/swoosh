import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArtistInSongUpdateInput } from "../../../inputs/ArtistInSongUpdateInput";
import { ArtistInSongWhereUniqueInput } from "../../../inputs/ArtistInSongWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateArtistInSongArgs {
  @TypeGraphQL.Field(_type => ArtistInSongUpdateInput, {
    nullable: false
  })
  data!: ArtistInSongUpdateInput;

  @TypeGraphQL.Field(_type => ArtistInSongWhereUniqueInput, {
    nullable: false
  })
  where!: ArtistInSongWhereUniqueInput;
}
