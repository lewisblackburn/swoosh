import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActorInMovieCreateManyMovieInputEnvelope } from "../inputs/ActorInMovieCreateManyMovieInputEnvelope";
import { ActorInMovieCreateOrConnectWithoutMovieInput } from "../inputs/ActorInMovieCreateOrConnectWithoutMovieInput";
import { ActorInMovieCreateWithoutMovieInput } from "../inputs/ActorInMovieCreateWithoutMovieInput";
import { ActorInMovieWhereUniqueInput } from "../inputs/ActorInMovieWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ActorInMovieCreateNestedManyWithoutMovieInput {
  @TypeGraphQL.Field(_type => [ActorInMovieCreateWithoutMovieInput], {
    nullable: true
  })
  create?: ActorInMovieCreateWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActorInMovieCreateOrConnectWithoutMovieInput], {
    nullable: true
  })
  connectOrCreate?: ActorInMovieCreateOrConnectWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => ActorInMovieCreateManyMovieInputEnvelope, {
    nullable: true
  })
  createMany?: ActorInMovieCreateManyMovieInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ActorInMovieWhereUniqueInput], {
    nullable: true
  })
  connect?: ActorInMovieWhereUniqueInput[] | undefined;
}
