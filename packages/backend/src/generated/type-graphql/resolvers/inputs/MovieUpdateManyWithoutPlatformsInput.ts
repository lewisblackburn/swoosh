import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateOrConnectWithoutPlatformsInput } from "../inputs/MovieCreateOrConnectWithoutPlatformsInput";
import { MovieCreateWithoutPlatformsInput } from "../inputs/MovieCreateWithoutPlatformsInput";
import { MovieScalarWhereInput } from "../inputs/MovieScalarWhereInput";
import { MovieUpdateManyWithWhereWithoutPlatformsInput } from "../inputs/MovieUpdateManyWithWhereWithoutPlatformsInput";
import { MovieUpdateWithWhereUniqueWithoutPlatformsInput } from "../inputs/MovieUpdateWithWhereUniqueWithoutPlatformsInput";
import { MovieUpsertWithWhereUniqueWithoutPlatformsInput } from "../inputs/MovieUpsertWithWhereUniqueWithoutPlatformsInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MovieUpdateManyWithoutPlatformsInput {
  @TypeGraphQL.Field(_type => [MovieCreateWithoutPlatformsInput], {
    nullable: true
  })
  create?: MovieCreateWithoutPlatformsInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieCreateOrConnectWithoutPlatformsInput], {
    nullable: true
  })
  connectOrCreate?: MovieCreateOrConnectWithoutPlatformsInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieUpsertWithWhereUniqueWithoutPlatformsInput], {
    nullable: true
  })
  upsert?: MovieUpsertWithWhereUniqueWithoutPlatformsInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [MovieUpdateWithWhereUniqueWithoutPlatformsInput], {
    nullable: true
  })
  update?: MovieUpdateWithWhereUniqueWithoutPlatformsInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieUpdateManyWithWhereWithoutPlatformsInput], {
    nullable: true
  })
  updateMany?: MovieUpdateManyWithWhereWithoutPlatformsInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MovieScalarWhereInput[] | undefined;
}
