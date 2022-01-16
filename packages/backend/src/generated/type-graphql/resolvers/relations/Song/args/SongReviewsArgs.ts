import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReviewOrderByWithRelationInput } from "../../../inputs/ReviewOrderByWithRelationInput";
import { ReviewWhereInput } from "../../../inputs/ReviewWhereInput";
import { ReviewWhereUniqueInput } from "../../../inputs/ReviewWhereUniqueInput";
import { ReviewScalarFieldEnum } from "../../../../enums/ReviewScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class SongReviewsArgs {
  @TypeGraphQL.Field(_type => ReviewWhereInput, {
    nullable: true
  })
  where?: ReviewWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ReviewOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ReviewOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ReviewWhereUniqueInput, {
    nullable: true
  })
  cursor?: ReviewWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ReviewScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "title" | "review" | "userId" | "movieId" | "showId" | "bookId" | "songId"> | undefined;
}
