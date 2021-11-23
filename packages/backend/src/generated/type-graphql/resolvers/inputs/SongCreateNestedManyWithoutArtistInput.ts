import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateManyArtistInputEnvelope } from "../inputs/SongCreateManyArtistInputEnvelope";
import { SongCreateOrConnectWithoutArtistInput } from "../inputs/SongCreateOrConnectWithoutArtistInput";
import { SongCreateWithoutArtistInput } from "../inputs/SongCreateWithoutArtistInput";
import { SongWhereUniqueInput } from "../inputs/SongWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SongCreateNestedManyWithoutArtistInput {
  @TypeGraphQL.Field(_type => [SongCreateWithoutArtistInput], {
    nullable: true
  })
  create?: SongCreateWithoutArtistInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongCreateOrConnectWithoutArtistInput], {
    nullable: true
  })
  connectOrCreate?: SongCreateOrConnectWithoutArtistInput[] | undefined;

  @TypeGraphQL.Field(_type => SongCreateManyArtistInputEnvelope, {
    nullable: true
  })
  createMany?: SongCreateManyArtistInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SongWhereUniqueInput], {
    nullable: true
  })
  connect?: SongWhereUniqueInput[] | undefined;
}
