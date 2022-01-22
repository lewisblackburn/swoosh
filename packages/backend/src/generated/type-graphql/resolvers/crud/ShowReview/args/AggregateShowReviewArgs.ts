import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShowReviewOrderByWithRelationInput } from "../../../inputs/ShowReviewOrderByWithRelationInput";
import { ShowReviewWhereInput } from "../../../inputs/ShowReviewWhereInput";
import { ShowReviewWhereUniqueInput } from "../../../inputs/ShowReviewWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateShowReviewArgs {
  @TypeGraphQL.Field(_type => ShowReviewWhereInput, {
    nullable: true
  })
  where?: ShowReviewWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ShowReviewOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ShowReviewOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ShowReviewWhereUniqueInput, {
    nullable: true
  })
  cursor?: ShowReviewWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
