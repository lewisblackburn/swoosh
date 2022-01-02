import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PlatformOnMovieScalarWhereInput {
  @TypeGraphQL.Field(_type => [PlatformOnMovieScalarWhereInput], {
    nullable: true
  })
  AND?: PlatformOnMovieScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformOnMovieScalarWhereInput], {
    nullable: true
  })
  OR?: PlatformOnMovieScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformOnMovieScalarWhereInput], {
    nullable: true
  })
  NOT?: PlatformOnMovieScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  price?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  platformId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  movieId?: IntFilter | undefined;
}
