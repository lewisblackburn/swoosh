import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongInShowCreateManySongInputEnvelope } from "../inputs/SongInShowCreateManySongInputEnvelope";
import { SongInShowCreateOrConnectWithoutSongInput } from "../inputs/SongInShowCreateOrConnectWithoutSongInput";
import { SongInShowCreateWithoutSongInput } from "../inputs/SongInShowCreateWithoutSongInput";
import { SongInShowWhereUniqueInput } from "../inputs/SongInShowWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SongInShowCreateNestedManyWithoutSongInput {
  @TypeGraphQL.Field(_type => [SongInShowCreateWithoutSongInput], {
    nullable: true
  })
  create?: SongInShowCreateWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongInShowCreateOrConnectWithoutSongInput], {
    nullable: true
  })
  connectOrCreate?: SongInShowCreateOrConnectWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => SongInShowCreateManySongInputEnvelope, {
    nullable: true
  })
  createMany?: SongInShowCreateManySongInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SongInShowWhereUniqueInput], {
    nullable: true
  })
  connect?: SongInShowWhereUniqueInput[] | undefined;
}
