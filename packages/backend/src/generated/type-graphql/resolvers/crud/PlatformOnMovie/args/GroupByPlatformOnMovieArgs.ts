import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlatformOnMovieOrderByWithAggregationInput } from "../../../inputs/PlatformOnMovieOrderByWithAggregationInput";
import { PlatformOnMovieScalarWhereWithAggregatesInput } from "../../../inputs/PlatformOnMovieScalarWhereWithAggregatesInput";
import { PlatformOnMovieWhereInput } from "../../../inputs/PlatformOnMovieWhereInput";
import { PlatformOnMovieScalarFieldEnum } from "../../../../enums/PlatformOnMovieScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPlatformOnMovieArgs {
  @TypeGraphQL.Field(_type => PlatformOnMovieWhereInput, {
    nullable: true
  })
  where?: PlatformOnMovieWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PlatformOnMovieOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PlatformOnMovieOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformOnMovieScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"price" | "platformId" | "movieId">;

  @TypeGraphQL.Field(_type => PlatformOnMovieScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PlatformOnMovieScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
