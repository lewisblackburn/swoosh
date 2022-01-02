import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActorInShowCreateManyInput } from "../../../inputs/ActorInShowCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyActorInShowArgs {
  @TypeGraphQL.Field(_type => [ActorInShowCreateManyInput], {
    nullable: false
  })
  data!: ActorInShowCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
