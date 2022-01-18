import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActorInShowCreateManyShowInput } from "../inputs/ActorInShowCreateManyShowInput";

@TypeGraphQL.InputType("ActorInShowCreateManyShowInputEnvelope", {
  isAbstract: true
})
export class ActorInShowCreateManyShowInputEnvelope {
  @TypeGraphQL.Field(_type => [ActorInShowCreateManyShowInput], {
    nullable: false
  })
  data!: ActorInShowCreateManyShowInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
