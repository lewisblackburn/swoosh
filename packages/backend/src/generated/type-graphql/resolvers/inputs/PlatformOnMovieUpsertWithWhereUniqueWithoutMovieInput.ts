import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlatformOnMovieCreateWithoutMovieInput } from "../inputs/PlatformOnMovieCreateWithoutMovieInput";
import { PlatformOnMovieUpdateWithoutMovieInput } from "../inputs/PlatformOnMovieUpdateWithoutMovieInput";
import { PlatformOnMovieWhereUniqueInput } from "../inputs/PlatformOnMovieWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PlatformOnMovieUpsertWithWhereUniqueWithoutMovieInput {
  @TypeGraphQL.Field(_type => PlatformOnMovieWhereUniqueInput, {
    nullable: false
  })
  where!: PlatformOnMovieWhereUniqueInput;

  @TypeGraphQL.Field(_type => PlatformOnMovieUpdateWithoutMovieInput, {
    nullable: false
  })
  update!: PlatformOnMovieUpdateWithoutMovieInput;

  @TypeGraphQL.Field(_type => PlatformOnMovieCreateWithoutMovieInput, {
    nullable: false
  })
  create!: PlatformOnMovieCreateWithoutMovieInput;
}
