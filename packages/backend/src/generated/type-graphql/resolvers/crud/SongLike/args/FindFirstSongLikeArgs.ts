import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongLikeOrderByWithRelationInput } from "../../../inputs/SongLikeOrderByWithRelationInput";
import { SongLikeWhereInput } from "../../../inputs/SongLikeWhereInput";
import { SongLikeWhereUniqueInput } from "../../../inputs/SongLikeWhereUniqueInput";
import { SongLikeScalarFieldEnum } from "../../../../enums/SongLikeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstSongLikeArgs {
  @TypeGraphQL.Field(_type => SongLikeWhereInput, {
    nullable: true
  })
  where?: SongLikeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SongLikeOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SongLikeOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SongLikeWhereUniqueInput, {
    nullable: true
  })
  cursor?: SongLikeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [SongLikeScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"userId" | "songId" | "createdAt"> | undefined;
}
