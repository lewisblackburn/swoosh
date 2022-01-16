import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateOrConnectWithoutWatchlistInput } from "../inputs/MovieCreateOrConnectWithoutWatchlistInput";
import { MovieCreateWithoutWatchlistInput } from "../inputs/MovieCreateWithoutWatchlistInput";
import { MovieScalarWhereInput } from "../inputs/MovieScalarWhereInput";
import { MovieUpdateManyWithWhereWithoutWatchlistInput } from "../inputs/MovieUpdateManyWithWhereWithoutWatchlistInput";
import { MovieUpdateWithWhereUniqueWithoutWatchlistInput } from "../inputs/MovieUpdateWithWhereUniqueWithoutWatchlistInput";
import { MovieUpsertWithWhereUniqueWithoutWatchlistInput } from "../inputs/MovieUpsertWithWhereUniqueWithoutWatchlistInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MovieUpdateManyWithoutWatchlistInput {
  @TypeGraphQL.Field(_type => [MovieCreateWithoutWatchlistInput], {
    nullable: true
  })
  create?: MovieCreateWithoutWatchlistInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieCreateOrConnectWithoutWatchlistInput], {
    nullable: true
  })
  connectOrCreate?: MovieCreateOrConnectWithoutWatchlistInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieUpsertWithWhereUniqueWithoutWatchlistInput], {
    nullable: true
  })
  upsert?: MovieUpsertWithWhereUniqueWithoutWatchlistInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieWhereUniqueInput], {
    nullable: true
  })
  connect?: MovieWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieWhereUniqueInput], {
    nullable: true
  })
  set?: MovieWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieWhereUniqueInput], {
    nullable: true
  })
  disconnect?: MovieWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieWhereUniqueInput], {
    nullable: true
  })
  delete?: MovieWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieUpdateWithWhereUniqueWithoutWatchlistInput], {
    nullable: true
  })
  update?: MovieUpdateWithWhereUniqueWithoutWatchlistInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieUpdateManyWithWhereWithoutWatchlistInput], {
    nullable: true
  })
  updateMany?: MovieUpdateManyWithWhereWithoutWatchlistInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MovieScalarWhereInput[] | undefined;
}
