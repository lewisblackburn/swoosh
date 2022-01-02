import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongInShowWhereInput } from "../../../inputs/SongInShowWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySongInShowArgs {
  @TypeGraphQL.Field(_type => SongInShowWhereInput, {
    nullable: true
  })
  where?: SongInShowWhereInput | undefined;
}
