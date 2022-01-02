import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlatformCreateManyInput } from "../../../inputs/PlatformCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPlatformArgs {
  @TypeGraphQL.Field(_type => [PlatformCreateManyInput], {
    nullable: false
  })
  data!: PlatformCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
