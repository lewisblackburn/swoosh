import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateOrConnectWithoutFavouritesInput } from "../inputs/SongCreateOrConnectWithoutFavouritesInput";
import { SongCreateWithoutFavouritesInput } from "../inputs/SongCreateWithoutFavouritesInput";
import { SongScalarWhereInput } from "../inputs/SongScalarWhereInput";
import { SongUpdateManyWithWhereWithoutFavouritesInput } from "../inputs/SongUpdateManyWithWhereWithoutFavouritesInput";
import { SongUpdateWithWhereUniqueWithoutFavouritesInput } from "../inputs/SongUpdateWithWhereUniqueWithoutFavouritesInput";
import { SongUpsertWithWhereUniqueWithoutFavouritesInput } from "../inputs/SongUpsertWithWhereUniqueWithoutFavouritesInput";
import { SongWhereUniqueInput } from "../inputs/SongWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SongUpdateManyWithoutFavouritesInput {
  @TypeGraphQL.Field(_type => [SongCreateWithoutFavouritesInput], {
    nullable: true
  })
  create?: SongCreateWithoutFavouritesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongCreateOrConnectWithoutFavouritesInput], {
    nullable: true
  })
  connectOrCreate?: SongCreateOrConnectWithoutFavouritesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongUpsertWithWhereUniqueWithoutFavouritesInput], {
    nullable: true
  })
  upsert?: SongUpsertWithWhereUniqueWithoutFavouritesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongWhereUniqueInput], {
    nullable: true
  })
  connect?: SongWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongWhereUniqueInput], {
    nullable: true
  })
  set?: SongWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongWhereUniqueInput], {
    nullable: true
  })
  disconnect?: SongWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongWhereUniqueInput], {
    nullable: true
  })
  delete?: SongWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongUpdateWithWhereUniqueWithoutFavouritesInput], {
    nullable: true
  })
  update?: SongUpdateWithWhereUniqueWithoutFavouritesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongUpdateManyWithWhereWithoutFavouritesInput], {
    nullable: true
  })
  updateMany?: SongUpdateManyWithWhereWithoutFavouritesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SongScalarWhereInput[] | undefined;
}
