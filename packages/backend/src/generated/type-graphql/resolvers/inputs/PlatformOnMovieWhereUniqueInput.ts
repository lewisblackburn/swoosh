import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlatformOnMoviePlatformIdMovieIdCompoundUniqueInput } from "../inputs/PlatformOnMoviePlatformIdMovieIdCompoundUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PlatformOnMovieWhereUniqueInput {
  @TypeGraphQL.Field(_type => PlatformOnMoviePlatformIdMovieIdCompoundUniqueInput, {
    nullable: true
  })
  platformId_movieId?: PlatformOnMoviePlatformIdMovieIdCompoundUniqueInput | undefined;
}
