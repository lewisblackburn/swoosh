import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongInMovieCreateManyMovieInputEnvelope } from "../inputs/SongInMovieCreateManyMovieInputEnvelope";
import { SongInMovieCreateOrConnectWithoutMovieInput } from "../inputs/SongInMovieCreateOrConnectWithoutMovieInput";
import { SongInMovieCreateWithoutMovieInput } from "../inputs/SongInMovieCreateWithoutMovieInput";
import { SongInMovieScalarWhereInput } from "../inputs/SongInMovieScalarWhereInput";
import { SongInMovieUpdateManyWithWhereWithoutMovieInput } from "../inputs/SongInMovieUpdateManyWithWhereWithoutMovieInput";
import { SongInMovieUpdateWithWhereUniqueWithoutMovieInput } from "../inputs/SongInMovieUpdateWithWhereUniqueWithoutMovieInput";
import { SongInMovieUpsertWithWhereUniqueWithoutMovieInput } from "../inputs/SongInMovieUpsertWithWhereUniqueWithoutMovieInput";
import { SongInMovieWhereUniqueInput } from "../inputs/SongInMovieWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SongInMovieUpdateManyWithoutMovieInput {
  @TypeGraphQL.Field(_type => [SongInMovieCreateWithoutMovieInput], {
    nullable: true
  })
  create?: SongInMovieCreateWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongInMovieCreateOrConnectWithoutMovieInput], {
    nullable: true
  })
  connectOrCreate?: SongInMovieCreateOrConnectWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongInMovieUpsertWithWhereUniqueWithoutMovieInput], {
    nullable: true
  })
  upsert?: SongInMovieUpsertWithWhereUniqueWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => SongInMovieCreateManyMovieInputEnvelope, {
    nullable: true
  })
  createMany?: SongInMovieCreateManyMovieInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SongInMovieWhereUniqueInput], {
    nullable: true
  })
  connect?: SongInMovieWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongInMovieWhereUniqueInput], {
    nullable: true
  })
  set?: SongInMovieWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongInMovieWhereUniqueInput], {
    nullable: true
  })
  disconnect?: SongInMovieWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongInMovieWhereUniqueInput], {
    nullable: true
  })
  delete?: SongInMovieWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongInMovieUpdateWithWhereUniqueWithoutMovieInput], {
    nullable: true
  })
  update?: SongInMovieUpdateWithWhereUniqueWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongInMovieUpdateManyWithWhereWithoutMovieInput], {
    nullable: true
  })
  updateMany?: SongInMovieUpdateManyWithWhereWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongInMovieScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SongInMovieScalarWhereInput[] | undefined;
}
