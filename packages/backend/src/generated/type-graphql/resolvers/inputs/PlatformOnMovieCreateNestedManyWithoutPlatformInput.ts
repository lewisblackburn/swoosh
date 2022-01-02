import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlatformOnMovieCreateManyPlatformInputEnvelope } from "../inputs/PlatformOnMovieCreateManyPlatformInputEnvelope";
import { PlatformOnMovieCreateOrConnectWithoutPlatformInput } from "../inputs/PlatformOnMovieCreateOrConnectWithoutPlatformInput";
import { PlatformOnMovieCreateWithoutPlatformInput } from "../inputs/PlatformOnMovieCreateWithoutPlatformInput";
import { PlatformOnMovieWhereUniqueInput } from "../inputs/PlatformOnMovieWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PlatformOnMovieCreateNestedManyWithoutPlatformInput {
  @TypeGraphQL.Field(_type => [PlatformOnMovieCreateWithoutPlatformInput], {
    nullable: true
  })
  create?: PlatformOnMovieCreateWithoutPlatformInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformOnMovieCreateOrConnectWithoutPlatformInput], {
    nullable: true
  })
  connectOrCreate?: PlatformOnMovieCreateOrConnectWithoutPlatformInput[] | undefined;

  @TypeGraphQL.Field(_type => PlatformOnMovieCreateManyPlatformInputEnvelope, {
    nullable: true
  })
  createMany?: PlatformOnMovieCreateManyPlatformInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PlatformOnMovieWhereUniqueInput], {
    nullable: true
  })
  connect?: PlatformOnMovieWhereUniqueInput[] | undefined;
}
