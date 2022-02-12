import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArtistInSongOrderByWithRelationInput } from "../../../inputs/ArtistInSongOrderByWithRelationInput";
import { ArtistInSongWhereInput } from "../../../inputs/ArtistInSongWhereInput";
import { ArtistInSongWhereUniqueInput } from "../../../inputs/ArtistInSongWhereUniqueInput";
import { ArtistInSongScalarFieldEnum } from "../../../../enums/ArtistInSongScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class PersonSongsArgs {
  @TypeGraphQL.Field(_type => ArtistInSongWhereInput, {
    nullable: true
  })
  where?: ArtistInSongWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ArtistInSongOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ArtistInSongOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ArtistInSongWhereUniqueInput, {
    nullable: true
  })
  cursor?: ArtistInSongWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ArtistInSongScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"songId" | "personId" | "createdAt"> | undefined;
}
