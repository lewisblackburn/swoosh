import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShowReviewCreateManyInput } from "../../../inputs/ShowReviewCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyShowReviewArgs {
  @TypeGraphQL.Field(_type => [ShowReviewCreateManyInput], {
    nullable: false
  })
  data!: ShowReviewCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
