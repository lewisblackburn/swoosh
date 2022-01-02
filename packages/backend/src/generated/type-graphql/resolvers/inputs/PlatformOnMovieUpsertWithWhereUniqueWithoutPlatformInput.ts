import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlatformOnMovieCreateWithoutPlatformInput } from "../inputs/PlatformOnMovieCreateWithoutPlatformInput";
import { PlatformOnMovieUpdateWithoutPlatformInput } from "../inputs/PlatformOnMovieUpdateWithoutPlatformInput";
import { PlatformOnMovieWhereUniqueInput } from "../inputs/PlatformOnMovieWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PlatformOnMovieUpsertWithWhereUniqueWithoutPlatformInput {
  @TypeGraphQL.Field(_type => PlatformOnMovieWhereUniqueInput, {
    nullable: false
  })
  where!: PlatformOnMovieWhereUniqueInput;

  @TypeGraphQL.Field(_type => PlatformOnMovieUpdateWithoutPlatformInput, {
    nullable: false
  })
  update!: PlatformOnMovieUpdateWithoutPlatformInput;

  @TypeGraphQL.Field(_type => PlatformOnMovieCreateWithoutPlatformInput, {
    nullable: false
  })
  create!: PlatformOnMovieCreateWithoutPlatformInput;
}
