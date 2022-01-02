import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongInMovieOrderByWithAggregationInput } from "../../../inputs/SongInMovieOrderByWithAggregationInput";
import { SongInMovieScalarWhereWithAggregatesInput } from "../../../inputs/SongInMovieScalarWhereWithAggregatesInput";
import { SongInMovieWhereInput } from "../../../inputs/SongInMovieWhereInput";
import { SongInMovieScalarFieldEnum } from "../../../../enums/SongInMovieScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySongInMovieArgs {
  @TypeGraphQL.Field(_type => SongInMovieWhereInput, {
    nullable: true
  })
  where?: SongInMovieWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SongInMovieOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SongInMovieOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongInMovieScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"timestamp" | "description" | "songId" | "movieId">;

  @TypeGraphQL.Field(_type => SongInMovieScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SongInMovieScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
