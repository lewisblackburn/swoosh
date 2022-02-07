import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArtistInSongCreateManyPersonInputEnvelope } from "../inputs/ArtistInSongCreateManyPersonInputEnvelope";
import { ArtistInSongCreateOrConnectWithoutPersonInput } from "../inputs/ArtistInSongCreateOrConnectWithoutPersonInput";
import { ArtistInSongCreateWithoutPersonInput } from "../inputs/ArtistInSongCreateWithoutPersonInput";
import { ArtistInSongWhereUniqueInput } from "../inputs/ArtistInSongWhereUniqueInput";

@TypeGraphQL.InputType("ArtistInSongCreateNestedManyWithoutPersonInput", {
  isAbstract: true
})
export class ArtistInSongCreateNestedManyWithoutPersonInput {
  @TypeGraphQL.Field(_type => [ArtistInSongCreateWithoutPersonInput], {
    nullable: true
  })
  create?: ArtistInSongCreateWithoutPersonInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistInSongCreateOrConnectWithoutPersonInput], {
    nullable: true
  })
  connectOrCreate?: ArtistInSongCreateOrConnectWithoutPersonInput[] | undefined;

  @TypeGraphQL.Field(_type => ArtistInSongCreateManyPersonInputEnvelope, {
    nullable: true
  })
  createMany?: ArtistInSongCreateManyPersonInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ArtistInSongWhereUniqueInput], {
    nullable: true
  })
  connect?: ArtistInSongWhereUniqueInput[] | undefined;
}
