import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlatformOnShowUpdateManyMutationInput } from "../../../inputs/PlatformOnShowUpdateManyMutationInput";
import { PlatformOnShowWhereInput } from "../../../inputs/PlatformOnShowWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPlatformOnShowArgs {
  @TypeGraphQL.Field(_type => PlatformOnShowUpdateManyMutationInput, {
    nullable: false
  })
  data!: PlatformOnShowUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PlatformOnShowWhereInput, {
    nullable: true
  })
  where?: PlatformOnShowWhereInput | undefined;
}
