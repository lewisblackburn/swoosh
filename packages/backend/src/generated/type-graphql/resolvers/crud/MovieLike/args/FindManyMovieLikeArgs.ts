import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieLikeOrderByWithRelationInput } from "../../../inputs/MovieLikeOrderByWithRelationInput";
import { MovieLikeWhereInput } from "../../../inputs/MovieLikeWhereInput";
import { MovieLikeWhereUniqueInput } from "../../../inputs/MovieLikeWhereUniqueInput";
import { MovieLikeScalarFieldEnum } from "../../../../enums/MovieLikeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyMovieLikeArgs {
  @TypeGraphQL.Field(_type => MovieLikeWhereInput, {
    nullable: true
  })
  where?: MovieLikeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MovieLikeOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: MovieLikeOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => MovieLikeWhereUniqueInput, {
    nullable: true
  })
  cursor?: MovieLikeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [MovieLikeScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"userId" | "movieId" | "createdAt"> | undefined;
}
