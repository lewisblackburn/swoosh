import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongUpdateWithoutArtistInput } from "../inputs/SongUpdateWithoutArtistInput";
import { SongWhereUniqueInput } from "../inputs/SongWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SongUpdateWithWhereUniqueWithoutArtistInput {
  @TypeGraphQL.Field(_type => SongWhereUniqueInput, {
    nullable: false
  })
  where!: SongWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongUpdateWithoutArtistInput, {
    nullable: false
  })
  data!: SongUpdateWithoutArtistInput;
}
