import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongReviewUpdateManyMutationInput } from "../../../inputs/SongReviewUpdateManyMutationInput";
import { SongReviewWhereInput } from "../../../inputs/SongReviewWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySongReviewArgs {
  @TypeGraphQL.Field(_type => SongReviewUpdateManyMutationInput, {
    nullable: false
  })
  data!: SongReviewUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SongReviewWhereInput, {
    nullable: true
  })
  where?: SongReviewWhereInput | undefined;
}
