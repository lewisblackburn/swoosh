import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlatformOnMovieWhereUniqueInput } from "../../../inputs/PlatformOnMovieWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeletePlatformOnMovieArgs {
  @TypeGraphQL.Field(_type => PlatformOnMovieWhereUniqueInput, {
    nullable: false
  })
  where!: PlatformOnMovieWhereUniqueInput;
}
