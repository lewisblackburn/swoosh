import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongReviewCreateManyInput } from "../../../inputs/SongReviewCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySongReviewArgs {
  @TypeGraphQL.Field(_type => [SongReviewCreateManyInput], {
    nullable: false
  })
  data!: SongReviewCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
