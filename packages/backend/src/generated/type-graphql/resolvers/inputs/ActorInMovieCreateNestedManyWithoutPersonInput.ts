import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActorInMovieCreateManyPersonInputEnvelope } from "../inputs/ActorInMovieCreateManyPersonInputEnvelope";
import { ActorInMovieCreateOrConnectWithoutPersonInput } from "../inputs/ActorInMovieCreateOrConnectWithoutPersonInput";
import { ActorInMovieCreateWithoutPersonInput } from "../inputs/ActorInMovieCreateWithoutPersonInput";
import { ActorInMovieWhereUniqueInput } from "../inputs/ActorInMovieWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ActorInMovieCreateNestedManyWithoutPersonInput {
  @TypeGraphQL.Field(_type => [ActorInMovieCreateWithoutPersonInput], {
    nullable: true
  })
  create?: ActorInMovieCreateWithoutPersonInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActorInMovieCreateOrConnectWithoutPersonInput], {
    nullable: true
  })
  connectOrCreate?: ActorInMovieCreateOrConnectWithoutPersonInput[] | undefined;

  @TypeGraphQL.Field(_type => ActorInMovieCreateManyPersonInputEnvelope, {
    nullable: true
  })
  createMany?: ActorInMovieCreateManyPersonInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ActorInMovieWhereUniqueInput], {
    nullable: true
  })
  connect?: ActorInMovieWhereUniqueInput[] | undefined;
}
