import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateOrConnectWithoutGenresInput } from "../inputs/SongCreateOrConnectWithoutGenresInput";
import { SongCreateWithoutGenresInput } from "../inputs/SongCreateWithoutGenresInput";
import { SongWhereUniqueInput } from "../inputs/SongWhereUniqueInput";

@TypeGraphQL.InputType("SongCreateNestedManyWithoutGenresInput", {
  isAbstract: true
})
export class SongCreateNestedManyWithoutGenresInput {
  @TypeGraphQL.Field(_type => [SongCreateWithoutGenresInput], {
    nullable: true
  })
  create?: SongCreateWithoutGenresInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongCreateOrConnectWithoutGenresInput], {
    nullable: true
  })
  connectOrCreate?: SongCreateOrConnectWithoutGenresInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongWhereUniqueInput], {
    nullable: true
  })
  connect?: SongWhereUniqueInput[] | undefined;
}
