import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShowCreateManyInput } from "../../../inputs/ShowCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyShowArgs {
  @TypeGraphQL.Field(_type => [ShowCreateManyInput], {
    nullable: false
  })
  data!: ShowCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
