import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlatformOnMovieCreateInput } from "../../../inputs/PlatformOnMovieCreateInput";

@TypeGraphQL.ArgsType()
export class CreatePlatformOnMovieArgs {
  @TypeGraphQL.Field(_type => PlatformOnMovieCreateInput, {
    nullable: false
  })
  data!: PlatformOnMovieCreateInput;
}
