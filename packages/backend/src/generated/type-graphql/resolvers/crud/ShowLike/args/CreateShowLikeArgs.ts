import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShowLikeCreateInput } from "../../../inputs/ShowLikeCreateInput";

@TypeGraphQL.ArgsType()
export class CreateShowLikeArgs {
  @TypeGraphQL.Field(_type => ShowLikeCreateInput, {
    nullable: false
  })
  data!: ShowLikeCreateInput;
}
