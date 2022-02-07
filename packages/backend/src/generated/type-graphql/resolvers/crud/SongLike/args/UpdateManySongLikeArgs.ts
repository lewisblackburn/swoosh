import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongLikeUpdateManyMutationInput } from "../../../inputs/SongLikeUpdateManyMutationInput";
import { SongLikeWhereInput } from "../../../inputs/SongLikeWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySongLikeArgs {
  @TypeGraphQL.Field(_type => SongLikeUpdateManyMutationInput, {
    nullable: false
  })
  data!: SongLikeUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SongLikeWhereInput, {
    nullable: true
  })
  where?: SongLikeWhereInput | undefined;
}
