import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookLikeOrderByWithAggregationInput } from "../../../inputs/BookLikeOrderByWithAggregationInput";
import { BookLikeScalarWhereWithAggregatesInput } from "../../../inputs/BookLikeScalarWhereWithAggregatesInput";
import { BookLikeWhereInput } from "../../../inputs/BookLikeWhereInput";
import { BookLikeScalarFieldEnum } from "../../../../enums/BookLikeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByBookLikeArgs {
  @TypeGraphQL.Field(_type => BookLikeWhereInput, {
    nullable: true
  })
  where?: BookLikeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BookLikeOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: BookLikeOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookLikeScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"userId" | "bookId" | "createdAt">;

  @TypeGraphQL.Field(_type => BookLikeScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: BookLikeScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
