import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActorInShowWhereInput } from "../inputs/ActorInShowWhereInput";

@TypeGraphQL.InputType("ActorInShowListRelationFilter", {
  isAbstract: true
})
export class ActorInShowListRelationFilter {
  @TypeGraphQL.Field(_type => ActorInShowWhereInput, {
    nullable: true
  })
  every?: ActorInShowWhereInput | undefined;

  @TypeGraphQL.Field(_type => ActorInShowWhereInput, {
    nullable: true
  })
  some?: ActorInShowWhereInput | undefined;

  @TypeGraphQL.Field(_type => ActorInShowWhereInput, {
    nullable: true
  })
  none?: ActorInShowWhereInput | undefined;
}
