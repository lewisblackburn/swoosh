import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShowLikeCreateManyInput } from "../../../inputs/ShowLikeCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyShowLikeArgs {
  @TypeGraphQL.Field(_type => [ShowLikeCreateManyInput], {
    nullable: false
  })
  data!: ShowLikeCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
