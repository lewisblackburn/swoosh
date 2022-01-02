import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongInShowUpdateManyMutationInput } from "../../../inputs/SongInShowUpdateManyMutationInput";
import { SongInShowWhereInput } from "../../../inputs/SongInShowWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySongInShowArgs {
  @TypeGraphQL.Field(_type => SongInShowUpdateManyMutationInput, {
    nullable: false
  })
  data!: SongInShowUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SongInShowWhereInput, {
    nullable: true
  })
  where?: SongInShowWhereInput | undefined;
}
