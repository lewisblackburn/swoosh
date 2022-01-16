import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VoteOrderByWithRelationInput } from "../../../inputs/VoteOrderByWithRelationInput";
import { VoteWhereInput } from "../../../inputs/VoteWhereInput";
import { VoteWhereUniqueInput } from "../../../inputs/VoteWhereUniqueInput";
import { VoteScalarFieldEnum } from "../../../../enums/VoteScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class ReviewVoteArgs {
  @TypeGraphQL.Field(_type => VoteWhereInput, {
    nullable: true
  })
  where?: VoteWhereInput | undefined;

  @TypeGraphQL.Field(_type => [VoteOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: VoteOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => VoteWhereUniqueInput, {
    nullable: true
  })
  cursor?: VoteWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [VoteScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"userId" | "reviewId"> | undefined;
}
