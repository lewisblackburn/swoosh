import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlatformOnMovieWhereInput } from "../../../inputs/PlatformOnMovieWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPlatformOnMovieArgs {
  @TypeGraphQL.Field(_type => PlatformOnMovieWhereInput, {
    nullable: true
  })
  where?: PlatformOnMovieWhereInput | undefined;
}
