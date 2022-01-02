import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlatformOnMovieWhereInput } from "../inputs/PlatformOnMovieWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PlatformOnMovieListRelationFilter {
  @TypeGraphQL.Field(_type => PlatformOnMovieWhereInput, {
    nullable: true
  })
  every?: PlatformOnMovieWhereInput | undefined;

  @TypeGraphQL.Field(_type => PlatformOnMovieWhereInput, {
    nullable: true
  })
  some?: PlatformOnMovieWhereInput | undefined;

  @TypeGraphQL.Field(_type => PlatformOnMovieWhereInput, {
    nullable: true
  })
  none?: PlatformOnMovieWhereInput | undefined;
}
