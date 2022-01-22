import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongReviewLikeCreateManyInput } from "../../../inputs/SongReviewLikeCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySongReviewLikeArgs {
  @TypeGraphQL.Field(_type => [SongReviewLikeCreateManyInput], {
    nullable: false
  })
  data!: SongReviewLikeCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
