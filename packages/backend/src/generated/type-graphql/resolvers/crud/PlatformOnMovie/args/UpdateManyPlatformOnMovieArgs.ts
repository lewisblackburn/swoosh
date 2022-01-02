import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlatformOnMovieUpdateManyMutationInput } from "../../../inputs/PlatformOnMovieUpdateManyMutationInput";
import { PlatformOnMovieWhereInput } from "../../../inputs/PlatformOnMovieWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPlatformOnMovieArgs {
  @TypeGraphQL.Field(_type => PlatformOnMovieUpdateManyMutationInput, {
    nullable: false
  })
  data!: PlatformOnMovieUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PlatformOnMovieWhereInput, {
    nullable: true
  })
  where?: PlatformOnMovieWhereInput | undefined;
}
