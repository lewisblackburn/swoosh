import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateWithoutGenresInput } from "../inputs/SongCreateWithoutGenresInput";
import { SongUpdateWithoutGenresInput } from "../inputs/SongUpdateWithoutGenresInput";
import { SongWhereUniqueInput } from "../inputs/SongWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SongUpsertWithWhereUniqueWithoutGenresInput {
  @TypeGraphQL.Field(_type => SongWhereUniqueInput, {
    nullable: false
  })
  where!: SongWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongUpdateWithoutGenresInput, {
    nullable: false
  })
  update!: SongUpdateWithoutGenresInput;

  @TypeGraphQL.Field(_type => SongCreateWithoutGenresInput, {
    nullable: false
  })
  create!: SongCreateWithoutGenresInput;
}
