import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookLikeOrderByWithRelationInput } from "../../../inputs/BookLikeOrderByWithRelationInput";
import { BookLikeWhereInput } from "../../../inputs/BookLikeWhereInput";
import { BookLikeWhereUniqueInput } from "../../../inputs/BookLikeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateBookLikeArgs {
  @TypeGraphQL.Field(_type => BookLikeWhereInput, {
    nullable: true
  })
  where?: BookLikeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BookLikeOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: BookLikeOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => BookLikeWhereUniqueInput, {
    nullable: true
  })
  cursor?: BookLikeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
