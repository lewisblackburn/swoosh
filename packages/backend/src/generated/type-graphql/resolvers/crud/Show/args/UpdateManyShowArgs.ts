import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShowUpdateManyMutationInput } from "../../../inputs/ShowUpdateManyMutationInput";
import { ShowWhereInput } from "../../../inputs/ShowWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyShowArgs {
  @TypeGraphQL.Field(_type => ShowUpdateManyMutationInput, {
    nullable: false
  })
  data!: ShowUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ShowWhereInput, {
    nullable: true
  })
  where?: ShowWhereInput | undefined;
}
