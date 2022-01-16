import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateWithoutFavouritesInput } from "../inputs/SongCreateWithoutFavouritesInput";
import { SongUpdateWithoutFavouritesInput } from "../inputs/SongUpdateWithoutFavouritesInput";
import { SongWhereUniqueInput } from "../inputs/SongWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SongUpsertWithWhereUniqueWithoutFavouritesInput {
  @TypeGraphQL.Field(_type => SongWhereUniqueInput, {
    nullable: false
  })
  where!: SongWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongUpdateWithoutFavouritesInput, {
    nullable: false
  })
  update!: SongUpdateWithoutFavouritesInput;

  @TypeGraphQL.Field(_type => SongCreateWithoutFavouritesInput, {
    nullable: false
  })
  create!: SongCreateWithoutFavouritesInput;
}
