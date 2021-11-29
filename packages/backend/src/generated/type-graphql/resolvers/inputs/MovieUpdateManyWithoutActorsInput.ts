import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateOrConnectWithoutActorsInput } from "../inputs/MovieCreateOrConnectWithoutActorsInput";
import { MovieCreateWithoutActorsInput } from "../inputs/MovieCreateWithoutActorsInput";
import { MovieScalarWhereInput } from "../inputs/MovieScalarWhereInput";
import { MovieUpdateManyWithWhereWithoutActorsInput } from "../inputs/MovieUpdateManyWithWhereWithoutActorsInput";
import { MovieUpdateWithWhereUniqueWithoutActorsInput } from "../inputs/MovieUpdateWithWhereUniqueWithoutActorsInput";
import { MovieUpsertWithWhereUniqueWithoutActorsInput } from "../inputs/MovieUpsertWithWhereUniqueWithoutActorsInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MovieUpdateManyWithoutActorsInput {
  @TypeGraphQL.Field(_type => [MovieCreateWithoutActorsInput], {
    nullable: true
  })
  create?: MovieCreateWithoutActorsInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieCreateOrConnectWithoutActorsInput], {
    nullable: true
  })
  connectOrCreate?: MovieCreateOrConnectWithoutActorsInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieUpsertWithWhereUniqueWithoutActorsInput], {
    nullable: true
  })
  upsert?: MovieUpsertWithWhereUniqueWithoutActorsInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [MovieUpdateWithWhereUniqueWithoutActorsInput], {
    nullable: true
  })
  update?: MovieUpdateWithWhereUniqueWithoutActorsInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieUpdateManyWithWhereWithoutActorsInput], {
    nullable: true
  })
  updateMany?: MovieUpdateManyWithWhereWithoutActorsInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MovieScalarWhereInput[] | undefined;
}
