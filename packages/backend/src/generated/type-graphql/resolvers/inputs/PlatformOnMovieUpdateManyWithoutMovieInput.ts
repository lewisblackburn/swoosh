import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlatformOnMovieCreateManyMovieInputEnvelope } from "../inputs/PlatformOnMovieCreateManyMovieInputEnvelope";
import { PlatformOnMovieCreateOrConnectWithoutMovieInput } from "../inputs/PlatformOnMovieCreateOrConnectWithoutMovieInput";
import { PlatformOnMovieCreateWithoutMovieInput } from "../inputs/PlatformOnMovieCreateWithoutMovieInput";
import { PlatformOnMovieScalarWhereInput } from "../inputs/PlatformOnMovieScalarWhereInput";
import { PlatformOnMovieUpdateManyWithWhereWithoutMovieInput } from "../inputs/PlatformOnMovieUpdateManyWithWhereWithoutMovieInput";
import { PlatformOnMovieUpdateWithWhereUniqueWithoutMovieInput } from "../inputs/PlatformOnMovieUpdateWithWhereUniqueWithoutMovieInput";
import { PlatformOnMovieUpsertWithWhereUniqueWithoutMovieInput } from "../inputs/PlatformOnMovieUpsertWithWhereUniqueWithoutMovieInput";
import { PlatformOnMovieWhereUniqueInput } from "../inputs/PlatformOnMovieWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PlatformOnMovieUpdateManyWithoutMovieInput {
  @TypeGraphQL.Field(_type => [PlatformOnMovieCreateWithoutMovieInput], {
    nullable: true
  })
  create?: PlatformOnMovieCreateWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformOnMovieCreateOrConnectWithoutMovieInput], {
    nullable: true
  })
  connectOrCreate?: PlatformOnMovieCreateOrConnectWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformOnMovieUpsertWithWhereUniqueWithoutMovieInput], {
    nullable: true
  })
  upsert?: PlatformOnMovieUpsertWithWhereUniqueWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => PlatformOnMovieCreateManyMovieInputEnvelope, {
    nullable: true
  })
  createMany?: PlatformOnMovieCreateManyMovieInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [PlatformOnMovieUpdateWithWhereUniqueWithoutMovieInput], {
    nullable: true
  })
  update?: PlatformOnMovieUpdateWithWhereUniqueWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformOnMovieUpdateManyWithWhereWithoutMovieInput], {
    nullable: true
  })
  updateMany?: PlatformOnMovieUpdateManyWithWhereWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformOnMovieScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PlatformOnMovieScalarWhereInput[] | undefined;
}
