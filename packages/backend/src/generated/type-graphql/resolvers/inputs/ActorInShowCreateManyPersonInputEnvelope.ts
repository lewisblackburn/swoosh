import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActorInShowCreateManyPersonInput } from "../inputs/ActorInShowCreateManyPersonInput";

@TypeGraphQL.InputType("ActorInShowCreateManyPersonInputEnvelope", {
  isAbstract: true
})
export class ActorInShowCreateManyPersonInputEnvelope {
  @TypeGraphQL.Field(_type => [ActorInShowCreateManyPersonInput], {
    nullable: false
  })
  data!: ActorInShowCreateManyPersonInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
