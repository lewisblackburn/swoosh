import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FavouriteCreateOrConnectWithoutMoviesInput } from "../inputs/FavouriteCreateOrConnectWithoutMoviesInput";
import { FavouriteCreateWithoutMoviesInput } from "../inputs/FavouriteCreateWithoutMoviesInput";
import { FavouriteScalarWhereInput } from "../inputs/FavouriteScalarWhereInput";
import { FavouriteUpdateManyWithWhereWithoutMoviesInput } from "../inputs/FavouriteUpdateManyWithWhereWithoutMoviesInput";
import { FavouriteUpdateWithWhereUniqueWithoutMoviesInput } from "../inputs/FavouriteUpdateWithWhereUniqueWithoutMoviesInput";
import { FavouriteUpsertWithWhereUniqueWithoutMoviesInput } from "../inputs/FavouriteUpsertWithWhereUniqueWithoutMoviesInput";
import { FavouriteWhereUniqueInput } from "../inputs/FavouriteWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FavouriteUpdateManyWithoutMoviesInput {
  @TypeGraphQL.Field(_type => [FavouriteCreateWithoutMoviesInput], {
    nullable: true
  })
  create?: FavouriteCreateWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FavouriteCreateOrConnectWithoutMoviesInput], {
    nullable: true
  })
  connectOrCreate?: FavouriteCreateOrConnectWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FavouriteUpsertWithWhereUniqueWithoutMoviesInput], {
    nullable: true
  })
  upsert?: FavouriteUpsertWithWhereUniqueWithoutMoviesInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [FavouriteUpdateWithWhereUniqueWithoutMoviesInput], {
    nullable: true
  })
  update?: FavouriteUpdateWithWhereUniqueWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FavouriteUpdateManyWithWhereWithoutMoviesInput], {
    nullable: true
  })
  updateMany?: FavouriteUpdateManyWithWhereWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FavouriteScalarWhereInput], {
    nullable: true
  })
  deleteMany?: FavouriteScalarWhereInput[] | undefined;
}
