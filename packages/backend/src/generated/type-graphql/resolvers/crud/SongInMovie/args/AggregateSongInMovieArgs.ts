import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongInMovieOrderByWithRelationInput } from "../../../inputs/SongInMovieOrderByWithRelationInput";
import { SongInMovieWhereInput } from "../../../inputs/SongInMovieWhereInput";
import { SongInMovieWhereUniqueInput } from "../../../inputs/SongInMovieWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateSongInMovieArgs {
  @TypeGraphQL.Field(_type => SongInMovieWhereInput, {
    nullable: true
  })
  where?: SongInMovieWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SongInMovieOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SongInMovieOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SongInMovieWhereUniqueInput, {
    nullable: true
  })
  cursor?: SongInMovieWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
