import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActorInMovieCreateManyPersonInputEnvelope } from "../inputs/ActorInMovieCreateManyPersonInputEnvelope";
import { ActorInMovieCreateOrConnectWithoutPersonInput } from "../inputs/ActorInMovieCreateOrConnectWithoutPersonInput";
import { ActorInMovieCreateWithoutPersonInput } from "../inputs/ActorInMovieCreateWithoutPersonInput";
import { ActorInMovieScalarWhereInput } from "../inputs/ActorInMovieScalarWhereInput";
import { ActorInMovieUpdateManyWithWhereWithoutPersonInput } from "../inputs/ActorInMovieUpdateManyWithWhereWithoutPersonInput";
import { ActorInMovieUpdateWithWhereUniqueWithoutPersonInput } from "../inputs/ActorInMovieUpdateWithWhereUniqueWithoutPersonInput";
import { ActorInMovieUpsertWithWhereUniqueWithoutPersonInput } from "../inputs/ActorInMovieUpsertWithWhereUniqueWithoutPersonInput";
import { ActorInMovieWhereUniqueInput } from "../inputs/ActorInMovieWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ActorInMovieUpdateManyWithoutPersonInput {
  @TypeGraphQL.Field(_type => [ActorInMovieCreateWithoutPersonInput], {
    nullable: true
  })
  create?: ActorInMovieCreateWithoutPersonInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActorInMovieCreateOrConnectWithoutPersonInput], {
    nullable: true
  })
  connectOrCreate?: ActorInMovieCreateOrConnectWithoutPersonInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActorInMovieUpsertWithWhereUniqueWithoutPersonInput], {
    nullable: true
  })
  upsert?: ActorInMovieUpsertWithWhereUniqueWithoutPersonInput[] | undefined;

  @TypeGraphQL.Field(_type => ActorInMovieCreateManyPersonInputEnvelope, {
    nullable: true
  })
  createMany?: ActorInMovieCreateManyPersonInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ActorInMovieWhereUniqueInput], {
    nullable: true
  })
  connect?: ActorInMovieWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActorInMovieWhereUniqueInput], {
    nullable: true
  })
  set?: ActorInMovieWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActorInMovieWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ActorInMovieWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActorInMovieWhereUniqueInput], {
    nullable: true
  })
  delete?: ActorInMovieWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActorInMovieUpdateWithWhereUniqueWithoutPersonInput], {
    nullable: true
  })
  update?: ActorInMovieUpdateWithWhereUniqueWithoutPersonInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActorInMovieUpdateManyWithWhereWithoutPersonInput], {
    nullable: true
  })
  updateMany?: ActorInMovieUpdateManyWithWhereWithoutPersonInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActorInMovieScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ActorInMovieScalarWhereInput[] | undefined;
}
