import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongReviewWhereInput } from "../../../inputs/SongReviewWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySongReviewArgs {
  @TypeGraphQL.Field(_type => SongReviewWhereInput, {
    nullable: true
  })
  where?: SongReviewWhereInput | undefined;
}
