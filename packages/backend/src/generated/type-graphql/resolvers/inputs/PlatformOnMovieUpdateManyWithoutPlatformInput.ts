import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlatformOnMovieCreateManyPlatformInputEnvelope } from "../inputs/PlatformOnMovieCreateManyPlatformInputEnvelope";
import { PlatformOnMovieCreateOrConnectWithoutPlatformInput } from "../inputs/PlatformOnMovieCreateOrConnectWithoutPlatformInput";
import { PlatformOnMovieCreateWithoutPlatformInput } from "../inputs/PlatformOnMovieCreateWithoutPlatformInput";
import { PlatformOnMovieScalarWhereInput } from "../inputs/PlatformOnMovieScalarWhereInput";
import { PlatformOnMovieUpdateManyWithWhereWithoutPlatformInput } from "../inputs/PlatformOnMovieUpdateManyWithWhereWithoutPlatformInput";
import { PlatformOnMovieUpdateWithWhereUniqueWithoutPlatformInput } from "../inputs/PlatformOnMovieUpdateWithWhereUniqueWithoutPlatformInput";
import { PlatformOnMovieUpsertWithWhereUniqueWithoutPlatformInput } from "../inputs/PlatformOnMovieUpsertWithWhereUniqueWithoutPlatformInput";
import { PlatformOnMovieWhereUniqueInput } from "../inputs/PlatformOnMovieWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PlatformOnMovieUpdateManyWithoutPlatformInput {
  @TypeGraphQL.Field(_type => [PlatformOnMovieCreateWithoutPlatformInput], {
    nullable: true
  })
  create?: PlatformOnMovieCreateWithoutPlatformInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformOnMovieCreateOrConnectWithoutPlatformInput], {
    nullable: true
  })
  connectOrCreate?: PlatformOnMovieCreateOrConnectWithoutPlatformInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformOnMovieUpsertWithWhereUniqueWithoutPlatformInput], {
    nullable: true
  })
  upsert?: PlatformOnMovieUpsertWithWhereUniqueWithoutPlatformInput[] | undefined;

  @TypeGraphQL.Field(_type => PlatformOnMovieCreateManyPlatformInputEnvelope, {
    nullable: true
  })
  createMany?: PlatformOnMovieCreateManyPlatformInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PlatformOnMovieWhereUniqueInput], {
    nullable: true
  })
  connect?: PlatformOnMovieWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformOnMovieWhereUniqueInput], {
    nullable: true
  })
  set?: PlatformOnMovieWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformOnMovieWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PlatformOnMovieWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformOnMovieWhereUniqueInput], {
    nullable: true
  })
  delete?: PlatformOnMovieWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformOnMovieUpdateWithWhereUniqueWithoutPlatformInput], {
    nullable: true
  })
  update?: PlatformOnMovieUpdateWithWhereUniqueWithoutPlatformInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformOnMovieUpdateManyWithWhereWithoutPlatformInput], {
    nullable: true
  })
  updateMany?: PlatformOnMovieUpdateManyWithWhereWithoutPlatformInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformOnMovieScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PlatformOnMovieScalarWhereInput[] | undefined;
}
