import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FavouriteCreateOrConnectWithoutSongsInput } from "../inputs/FavouriteCreateOrConnectWithoutSongsInput";
import { FavouriteCreateWithoutSongsInput } from "../inputs/FavouriteCreateWithoutSongsInput";
import { FavouriteScalarWhereInput } from "../inputs/FavouriteScalarWhereInput";
import { FavouriteUpdateManyWithWhereWithoutSongsInput } from "../inputs/FavouriteUpdateManyWithWhereWithoutSongsInput";
import { FavouriteUpdateWithWhereUniqueWithoutSongsInput } from "../inputs/FavouriteUpdateWithWhereUniqueWithoutSongsInput";
import { FavouriteUpsertWithWhereUniqueWithoutSongsInput } from "../inputs/FavouriteUpsertWithWhereUniqueWithoutSongsInput";
import { FavouriteWhereUniqueInput } from "../inputs/FavouriteWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FavouriteUpdateManyWithoutSongsInput {
  @TypeGraphQL.Field(_type => [FavouriteCreateWithoutSongsInput], {
    nullable: true
  })
  create?: FavouriteCreateWithoutSongsInput[] | undefined;

  @TypeGraphQL.Field(_type => [FavouriteCreateOrConnectWithoutSongsInput], {
    nullable: true
  })
  connectOrCreate?: FavouriteCreateOrConnectWithoutSongsInput[] | undefined;

  @TypeGraphQL.Field(_type => [FavouriteUpsertWithWhereUniqueWithoutSongsInput], {
    nullable: true
  })
  upsert?: FavouriteUpsertWithWhereUniqueWithoutSongsInput[] | undefined;

  @TypeGraphQL.Field(_type => [FavouriteWhereUniqueInput], {
    nullable: true
  })
  connect?: FavouriteWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FavouriteWhereUniqueInput], {
    nullable: true
  })
  set?: FavouriteWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FavouriteWhereUniqueInput], {
    nullable: true
  })
  disconnect?: FavouriteWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FavouriteWhereUniqueInput], {
    nullable: true
  })
  delete?: FavouriteWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FavouriteUpdateWithWhereUniqueWithoutSongsInput], {
    nullable: true
  })
  update?: FavouriteUpdateWithWhereUniqueWithoutSongsInput[] | undefined;

  @TypeGraphQL.Field(_type => [FavouriteUpdateManyWithWhereWithoutSongsInput], {
    nullable: true
  })
  updateMany?: FavouriteUpdateManyWithWhereWithoutSongsInput[] | undefined;

  @TypeGraphQL.Field(_type => [FavouriteScalarWhereInput], {
    nullable: true
  })
  deleteMany?: FavouriteScalarWhereInput[] | undefined;
}
