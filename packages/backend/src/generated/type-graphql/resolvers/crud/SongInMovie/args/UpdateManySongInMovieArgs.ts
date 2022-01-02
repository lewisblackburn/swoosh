import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongInMovieUpdateManyMutationInput } from "../../../inputs/SongInMovieUpdateManyMutationInput";
import { SongInMovieWhereInput } from "../../../inputs/SongInMovieWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySongInMovieArgs {
  @TypeGraphQL.Field(_type => SongInMovieUpdateManyMutationInput, {
    nullable: false
  })
  data!: SongInMovieUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SongInMovieWhereInput, {
    nullable: true
  })
  where?: SongInMovieWhereInput | undefined;
}
