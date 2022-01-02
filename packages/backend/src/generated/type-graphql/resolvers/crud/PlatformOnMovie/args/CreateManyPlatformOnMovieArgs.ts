import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlatformOnMovieCreateManyInput } from "../../../inputs/PlatformOnMovieCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPlatformOnMovieArgs {
  @TypeGraphQL.Field(_type => [PlatformOnMovieCreateManyInput], {
    nullable: false
  })
  data!: PlatformOnMovieCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
