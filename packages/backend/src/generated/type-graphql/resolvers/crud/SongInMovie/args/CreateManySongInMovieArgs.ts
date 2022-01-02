import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongInMovieCreateManyInput } from "../../../inputs/SongInMovieCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySongInMovieArgs {
  @TypeGraphQL.Field(_type => [SongInMovieCreateManyInput], {
    nullable: false
  })
  data!: SongInMovieCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
