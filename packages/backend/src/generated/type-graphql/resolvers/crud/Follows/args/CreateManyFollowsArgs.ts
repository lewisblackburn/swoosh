import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FollowsCreateManyInput } from "../../../inputs/FollowsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyFollowsArgs {
  @TypeGraphQL.Field(_type => [FollowsCreateManyInput], {
    nullable: false
  })
  data!: FollowsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
