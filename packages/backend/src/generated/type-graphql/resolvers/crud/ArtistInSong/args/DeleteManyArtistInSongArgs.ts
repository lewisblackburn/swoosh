import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArtistInSongWhereInput } from "../../../inputs/ArtistInSongWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyArtistInSongArgs {
  @TypeGraphQL.Field(_type => ArtistInSongWhereInput, {
    nullable: true
  })
  where?: ArtistInSongWhereInput | undefined;
}
