import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongLikeWhereInput } from "../../../inputs/SongLikeWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySongLikeArgs {
  @TypeGraphQL.Field(_type => SongLikeWhereInput, {
    nullable: true
  })
  where?: SongLikeWhereInput | undefined;
}
