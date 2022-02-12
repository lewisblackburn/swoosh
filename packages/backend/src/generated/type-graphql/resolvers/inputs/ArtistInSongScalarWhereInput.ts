import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("ArtistInSongScalarWhereInput", {
  isAbstract: true
})
export class ArtistInSongScalarWhereInput {
  @TypeGraphQL.Field(_type => [ArtistInSongScalarWhereInput], {
    nullable: true
  })
  AND?: ArtistInSongScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistInSongScalarWhereInput], {
    nullable: true
  })
  OR?: ArtistInSongScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistInSongScalarWhereInput], {
    nullable: true
  })
  NOT?: ArtistInSongScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  songId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  personId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;
}
