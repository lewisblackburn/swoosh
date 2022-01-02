import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlatformOnMovieUpdateInput } from "../../../inputs/PlatformOnMovieUpdateInput";
import { PlatformOnMovieWhereUniqueInput } from "../../../inputs/PlatformOnMovieWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdatePlatformOnMovieArgs {
  @TypeGraphQL.Field(_type => PlatformOnMovieUpdateInput, {
    nullable: false
  })
  data!: PlatformOnMovieUpdateInput;

  @TypeGraphQL.Field(_type => PlatformOnMovieWhereUniqueInput, {
    nullable: false
  })
  where!: PlatformOnMovieWhereUniqueInput;
}
