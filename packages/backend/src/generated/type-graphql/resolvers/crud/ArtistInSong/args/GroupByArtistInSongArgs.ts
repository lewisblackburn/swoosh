import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ArtistInSongOrderByWithAggregationInput } from "../../../inputs/ArtistInSongOrderByWithAggregationInput";
import { ArtistInSongScalarWhereWithAggregatesInput } from "../../../inputs/ArtistInSongScalarWhereWithAggregatesInput";
import { ArtistInSongWhereInput } from "../../../inputs/ArtistInSongWhereInput";
import { ArtistInSongScalarFieldEnum } from "../../../../enums/ArtistInSongScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByArtistInSongArgs {
  @TypeGraphQL.Field(_type => ArtistInSongWhereInput, {
    nullable: true
  })
  where?: ArtistInSongWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ArtistInSongOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ArtistInSongOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistInSongScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"songId" | "personId" | "penname">;

  @TypeGraphQL.Field(_type => ArtistInSongScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ArtistInSongScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
