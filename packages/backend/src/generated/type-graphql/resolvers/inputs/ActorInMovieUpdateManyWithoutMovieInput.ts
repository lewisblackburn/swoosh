import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActorInMovieCreateManyMovieInputEnvelope } from "../inputs/ActorInMovieCreateManyMovieInputEnvelope";
import { ActorInMovieCreateOrConnectWithoutMovieInput } from "../inputs/ActorInMovieCreateOrConnectWithoutMovieInput";
import { ActorInMovieCreateWithoutMovieInput } from "../inputs/ActorInMovieCreateWithoutMovieInput";
import { ActorInMovieScalarWhereInput } from "../inputs/ActorInMovieScalarWhereInput";
import { ActorInMovieUpdateManyWithWhereWithoutMovieInput } from "../inputs/ActorInMovieUpdateManyWithWhereWithoutMovieInput";
import { ActorInMovieUpdateWithWhereUniqueWithoutMovieInput } from "../inputs/ActorInMovieUpdateWithWhereUniqueWithoutMovieInput";
import { ActorInMovieUpsertWithWhereUniqueWithoutMovieInput } from "../inputs/ActorInMovieUpsertWithWhereUniqueWithoutMovieInput";
import { ActorInMovieWhereUniqueInput } from "../inputs/ActorInMovieWhereUniqueInput";

@TypeGraphQL.InputType("ActorInMovieUpdateManyWithoutMovieInput", {
  isAbstract: true
})
export class ActorInMovieUpdateManyWithoutMovieInput {
  @TypeGraphQL.Field(_type => [ActorInMovieCreateWithoutMovieInput], {
    nullable: true
  })
  create?: ActorInMovieCreateWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActorInMovieCreateOrConnectWithoutMovieInput], {
    nullable: true
  })
  connectOrCreate?: ActorInMovieCreateOrConnectWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActorInMovieUpsertWithWhereUniqueWithoutMovieInput], {
    nullable: true
  })
  upsert?: ActorInMovieUpsertWithWhereUniqueWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => ActorInMovieCreateManyMovieInputEnvelope, {
    nullable: true
  })
  createMany?: ActorInMovieCreateManyMovieInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ActorInMovieWhereUniqueInput], {
    nullable: true
  })
  connect?: ActorInMovieWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActorInMovieUpdateWithWhereUniqueWithoutMovieInput], {
    nullable: true
  })
  update?: ActorInMovieUpdateWithWhereUniqueWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActorInMovieUpdateManyWithWhereWithoutMovieInput], {
    nullable: true
  })
  updateMany?: ActorInMovieUpdateManyWithWhereWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActorInMovieScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ActorInMovieScalarWhereInput[] | undefined;
}
