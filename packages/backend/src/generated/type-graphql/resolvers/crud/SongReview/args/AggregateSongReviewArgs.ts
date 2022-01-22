import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongReviewOrderByWithRelationInput } from "../../../inputs/SongReviewOrderByWithRelationInput";
import { SongReviewWhereInput } from "../../../inputs/SongReviewWhereInput";
import { SongReviewWhereUniqueInput } from "../../../inputs/SongReviewWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateSongReviewArgs {
  @TypeGraphQL.Field(_type => SongReviewWhereInput, {
    nullable: true
  })
  where?: SongReviewWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SongReviewOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SongReviewOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SongReviewWhereUniqueInput, {
    nullable: true
  })
  cursor?: SongReviewWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
