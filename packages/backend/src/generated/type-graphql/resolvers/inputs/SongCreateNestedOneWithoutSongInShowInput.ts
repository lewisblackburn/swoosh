import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateOrConnectWithoutSongInShowInput } from "../inputs/SongCreateOrConnectWithoutSongInShowInput";
import { SongCreateWithoutSongInShowInput } from "../inputs/SongCreateWithoutSongInShowInput";
import { SongWhereUniqueInput } from "../inputs/SongWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SongCreateNestedOneWithoutSongInShowInput {
  @TypeGraphQL.Field(_type => SongCreateWithoutSongInShowInput, {
    nullable: true
  })
  create?: SongCreateWithoutSongInShowInput | undefined;

  @TypeGraphQL.Field(_type => SongCreateOrConnectWithoutSongInShowInput, {
    nullable: true
  })
  connectOrCreate?: SongCreateOrConnectWithoutSongInShowInput | undefined;

  @TypeGraphQL.Field(_type => SongWhereUniqueInput, {
    nullable: true
  })
  connect?: SongWhereUniqueInput | undefined;
}
