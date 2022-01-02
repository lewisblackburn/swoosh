import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlatformOnShowCreateManyInput } from "../../../inputs/PlatformOnShowCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPlatformOnShowArgs {
  @TypeGraphQL.Field(_type => [PlatformOnShowCreateManyInput], {
    nullable: false
  })
  data!: PlatformOnShowCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
