import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlatformOnMovieCreateInput } from "../../../inputs/PlatformOnMovieCreateInput";
import { PlatformOnMovieUpdateInput } from "../../../inputs/PlatformOnMovieUpdateInput";
import { PlatformOnMovieWhereUniqueInput } from "../../../inputs/PlatformOnMovieWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertPlatformOnMovieArgs {
  @TypeGraphQL.Field(_type => PlatformOnMovieWhereUniqueInput, {
    nullable: false
  })
  where!: PlatformOnMovieWhereUniqueInput;

  @TypeGraphQL.Field(_type => PlatformOnMovieCreateInput, {
    nullable: false
  })
  create!: PlatformOnMovieCreateInput;

  @TypeGraphQL.Field(_type => PlatformOnMovieUpdateInput, {
    nullable: false
  })
  update!: PlatformOnMovieUpdateInput;
}
