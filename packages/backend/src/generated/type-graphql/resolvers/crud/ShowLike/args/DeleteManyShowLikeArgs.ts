import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShowLikeWhereInput } from "../../../inputs/ShowLikeWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyShowLikeArgs {
  @TypeGraphQL.Field(_type => ShowLikeWhereInput, {
    nullable: true
  })
  where?: ShowLikeWhereInput | undefined;
}
