import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateOrConnectWithoutFavouritesInput } from "../inputs/MovieCreateOrConnectWithoutFavouritesInput";
import { MovieCreateWithoutFavouritesInput } from "../inputs/MovieCreateWithoutFavouritesInput";
import { MovieScalarWhereInput } from "../inputs/MovieScalarWhereInput";
import { MovieUpdateManyWithWhereWithoutFavouritesInput } from "../inputs/MovieUpdateManyWithWhereWithoutFavouritesInput";
import { MovieUpdateWithWhereUniqueWithoutFavouritesInput } from "../inputs/MovieUpdateWithWhereUniqueWithoutFavouritesInput";
import { MovieUpsertWithWhereUniqueWithoutFavouritesInput } from "../inputs/MovieUpsertWithWhereUniqueWithoutFavouritesInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MovieUpdateManyWithoutFavouritesInput {
  @TypeGraphQL.Field(_type => [MovieCreateWithoutFavouritesInput], {
    nullable: true
  })
  create?: MovieCreateWithoutFavouritesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieCreateOrConnectWithoutFavouritesInput], {
    nullable: true
  })
  connectOrCreate?: MovieCreateOrConnectWithoutFavouritesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieUpsertWithWhereUniqueWithoutFavouritesInput], {
    nullable: true
  })
  upsert?: MovieUpsertWithWhereUniqueWithoutFavouritesInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [MovieUpdateWithWhereUniqueWithoutFavouritesInput], {
    nullable: true
  })
  update?: MovieUpdateWithWhereUniqueWithoutFavouritesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieUpdateManyWithWhereWithoutFavouritesInput], {
    nullable: true
  })
  updateMany?: MovieUpdateManyWithWhereWithoutFavouritesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MovieScalarWhereInput[] | undefined;
}
