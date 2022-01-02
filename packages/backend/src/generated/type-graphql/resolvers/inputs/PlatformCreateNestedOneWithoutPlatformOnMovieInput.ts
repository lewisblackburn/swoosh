import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlatformCreateOrConnectWithoutPlatformOnMovieInput } from "../inputs/PlatformCreateOrConnectWithoutPlatformOnMovieInput";
import { PlatformCreateWithoutPlatformOnMovieInput } from "../inputs/PlatformCreateWithoutPlatformOnMovieInput";
import { PlatformWhereUniqueInput } from "../inputs/PlatformWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PlatformCreateNestedOneWithoutPlatformOnMovieInput {
  @TypeGraphQL.Field(_type => PlatformCreateWithoutPlatformOnMovieInput, {
    nullable: true
  })
  create?: PlatformCreateWithoutPlatformOnMovieInput | undefined;

  @TypeGraphQL.Field(_type => PlatformCreateOrConnectWithoutPlatformOnMovieInput, {
    nullable: true
  })
  connectOrCreate?: PlatformCreateOrConnectWithoutPlatformOnMovieInput | undefined;

  @TypeGraphQL.Field(_type => PlatformWhereUniqueInput, {
    nullable: true
  })
  connect?: PlatformWhereUniqueInput | undefined;
}
