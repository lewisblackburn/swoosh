import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongInMovieWhereInput } from "../inputs/SongInMovieWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SongInMovieListRelationFilter {
  @TypeGraphQL.Field(_type => SongInMovieWhereInput, {
    nullable: true
  })
  every?: SongInMovieWhereInput | undefined;

  @TypeGraphQL.Field(_type => SongInMovieWhereInput, {
    nullable: true
  })
  some?: SongInMovieWhereInput | undefined;

  @TypeGraphQL.Field(_type => SongInMovieWhereInput, {
    nullable: true
  })
  none?: SongInMovieWhereInput | undefined;
}
