import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActorInShowPersonIdShowIdCompoundUniqueInput } from "../inputs/ActorInShowPersonIdShowIdCompoundUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ActorInShowWhereUniqueInput {
  @TypeGraphQL.Field(_type => ActorInShowPersonIdShowIdCompoundUniqueInput, {
    nullable: true
  })
  personId_showId?: ActorInShowPersonIdShowIdCompoundUniqueInput | undefined;
}
