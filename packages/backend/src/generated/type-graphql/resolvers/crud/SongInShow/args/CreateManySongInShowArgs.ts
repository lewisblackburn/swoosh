import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongInShowCreateManyInput } from "../../../inputs/SongInShowCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySongInShowArgs {
  @TypeGraphQL.Field(_type => [SongInShowCreateManyInput], {
    nullable: false
  })
  data!: SongInShowCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
