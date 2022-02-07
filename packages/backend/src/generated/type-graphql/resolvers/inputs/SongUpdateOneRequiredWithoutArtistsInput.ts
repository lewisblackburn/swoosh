import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateOrConnectWithoutArtistsInput } from "../inputs/SongCreateOrConnectWithoutArtistsInput";
import { SongCreateWithoutArtistsInput } from "../inputs/SongCreateWithoutArtistsInput";
import { SongUpdateWithoutArtistsInput } from "../inputs/SongUpdateWithoutArtistsInput";
import { SongUpsertWithoutArtistsInput } from "../inputs/SongUpsertWithoutArtistsInput";
import { SongWhereUniqueInput } from "../inputs/SongWhereUniqueInput";

@TypeGraphQL.InputType("SongUpdateOneRequiredWithoutArtistsInput", {
  isAbstract: true
})
export class SongUpdateOneRequiredWithoutArtistsInput {
  @TypeGraphQL.Field(_type => SongCreateWithoutArtistsInput, {
    nullable: true
  })
  create?: SongCreateWithoutArtistsInput | undefined;

  @TypeGraphQL.Field(_type => SongCreateOrConnectWithoutArtistsInput, {
    nullable: true
  })
  connectOrCreate?: SongCreateOrConnectWithoutArtistsInput | undefined;

  @TypeGraphQL.Field(_type => SongUpsertWithoutArtistsInput, {
    nullable: true
  })
  upsert?: SongUpsertWithoutArtistsInput | undefined;

  @TypeGraphQL.Field(_type => SongWhereUniqueInput, {
    nullable: true
  })
  connect?: SongWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => SongUpdateWithoutArtistsInput, {
    nullable: true
  })
  update?: SongUpdateWithoutArtistsInput | undefined;
}
