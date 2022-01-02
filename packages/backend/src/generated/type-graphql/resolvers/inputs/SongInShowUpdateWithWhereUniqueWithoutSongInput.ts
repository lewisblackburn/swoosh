import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongInShowUpdateWithoutSongInput } from "../inputs/SongInShowUpdateWithoutSongInput";
import { SongInShowWhereUniqueInput } from "../inputs/SongInShowWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SongInShowUpdateWithWhereUniqueWithoutSongInput {
  @TypeGraphQL.Field(_type => SongInShowWhereUniqueInput, {
    nullable: false
  })
  where!: SongInShowWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongInShowUpdateWithoutSongInput, {
    nullable: false
  })
  data!: SongInShowUpdateWithoutSongInput;
}
