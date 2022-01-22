import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShowReviewLikeCreateManyInput } from "../../../inputs/ShowReviewLikeCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyShowReviewLikeArgs {
  @TypeGraphQL.Field(_type => [ShowReviewLikeCreateManyInput], {
    nullable: false
  })
  data!: ShowReviewLikeCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
