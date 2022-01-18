import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongUpdateWithoutGenresInput } from "../inputs/SongUpdateWithoutGenresInput";
import { SongWhereUniqueInput } from "../inputs/SongWhereUniqueInput";

@TypeGraphQL.InputType("SongUpdateWithWhereUniqueWithoutGenresInput", {
  isAbstract: true
})
export class SongUpdateWithWhereUniqueWithoutGenresInput {
  @TypeGraphQL.Field(_type => SongWhereUniqueInput, {
    nullable: false
  })
  where!: SongWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongUpdateWithoutGenresInput, {
    nullable: false
  })
  data!: SongUpdateWithoutGenresInput;
}
