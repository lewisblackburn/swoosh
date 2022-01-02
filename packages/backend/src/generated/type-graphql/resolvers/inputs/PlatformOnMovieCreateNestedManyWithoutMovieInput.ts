import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlatformOnMovieCreateManyMovieInputEnvelope } from "../inputs/PlatformOnMovieCreateManyMovieInputEnvelope";
import { PlatformOnMovieCreateOrConnectWithoutMovieInput } from "../inputs/PlatformOnMovieCreateOrConnectWithoutMovieInput";
import { PlatformOnMovieCreateWithoutMovieInput } from "../inputs/PlatformOnMovieCreateWithoutMovieInput";
import { PlatformOnMovieWhereUniqueInput } from "../inputs/PlatformOnMovieWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PlatformOnMovieCreateNestedManyWithoutMovieInput {
  @TypeGraphQL.Field(_type => [PlatformOnMovieCreateWithoutMovieInput], {
    nullable: true
  })
  create?: PlatformOnMovieCreateWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformOnMovieCreateOrConnectWithoutMovieInput], {
    nullable: true
  })
  connectOrCreate?: PlatformOnMovieCreateOrConnectWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => PlatformOnMovieCreateManyMovieInputEnvelope, {
    nullable: true
  })
  createMany?: PlatformOnMovieCreateManyMovieInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PlatformOnMovieWhereUniqueInput], {
    nullable: true
  })
  connect?: PlatformOnMovieWhereUniqueInput[] | undefined;
}
