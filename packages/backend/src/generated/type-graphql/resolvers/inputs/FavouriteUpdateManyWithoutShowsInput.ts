import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FavouriteCreateOrConnectWithoutShowsInput } from "../inputs/FavouriteCreateOrConnectWithoutShowsInput";
import { FavouriteCreateWithoutShowsInput } from "../inputs/FavouriteCreateWithoutShowsInput";
import { FavouriteScalarWhereInput } from "../inputs/FavouriteScalarWhereInput";
import { FavouriteUpdateManyWithWhereWithoutShowsInput } from "../inputs/FavouriteUpdateManyWithWhereWithoutShowsInput";
import { FavouriteUpdateWithWhereUniqueWithoutShowsInput } from "../inputs/FavouriteUpdateWithWhereUniqueWithoutShowsInput";
import { FavouriteUpsertWithWhereUniqueWithoutShowsInput } from "../inputs/FavouriteUpsertWithWhereUniqueWithoutShowsInput";
import { FavouriteWhereUniqueInput } from "../inputs/FavouriteWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FavouriteUpdateManyWithoutShowsInput {
  @TypeGraphQL.Field(_type => [FavouriteCreateWithoutShowsInput], {
    nullable: true
  })
  create?: FavouriteCreateWithoutShowsInput[] | undefined;

  @TypeGraphQL.Field(_type => [FavouriteCreateOrConnectWithoutShowsInput], {
    nullable: true
  })
  connectOrCreate?: FavouriteCreateOrConnectWithoutShowsInput[] | undefined;

  @TypeGraphQL.Field(_type => [FavouriteUpsertWithWhereUniqueWithoutShowsInput], {
    nullable: true
  })
  upsert?: FavouriteUpsertWithWhereUniqueWithoutShowsInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [FavouriteUpdateWithWhereUniqueWithoutShowsInput], {
    nullable: true
  })
  update?: FavouriteUpdateWithWhereUniqueWithoutShowsInput[] | undefined;

  @TypeGraphQL.Field(_type => [FavouriteUpdateManyWithWhereWithoutShowsInput], {
    nullable: true
  })
  updateMany?: FavouriteUpdateManyWithWhereWithoutShowsInput[] | undefined;

  @TypeGraphQL.Field(_type => [FavouriteScalarWhereInput], {
    nullable: true
  })
  deleteMany?: FavouriteScalarWhereInput[] | undefined;
}
