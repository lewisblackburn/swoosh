import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArtistInSongCreateManySongInputEnvelope } from "../inputs/ArtistInSongCreateManySongInputEnvelope";
import { ArtistInSongCreateOrConnectWithoutSongInput } from "../inputs/ArtistInSongCreateOrConnectWithoutSongInput";
import { ArtistInSongCreateWithoutSongInput } from "../inputs/ArtistInSongCreateWithoutSongInput";
import { ArtistInSongWhereUniqueInput } from "../inputs/ArtistInSongWhereUniqueInput";

@TypeGraphQL.InputType("ArtistInSongCreateNestedManyWithoutSongInput", {
  isAbstract: true
})
export class ArtistInSongCreateNestedManyWithoutSongInput {
  @TypeGraphQL.Field(_type => [ArtistInSongCreateWithoutSongInput], {
    nullable: true
  })
  create?: ArtistInSongCreateWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistInSongCreateOrConnectWithoutSongInput], {
    nullable: true
  })
  connectOrCreate?: ArtistInSongCreateOrConnectWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => ArtistInSongCreateManySongInputEnvelope, {
    nullable: true
  })
  createMany?: ArtistInSongCreateManySongInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ArtistInSongWhereUniqueInput], {
    nullable: true
  })
  connect?: ArtistInSongWhereUniqueInput[] | undefined;
}
