import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActorInShowScalarWhereInput } from "../inputs/ActorInShowScalarWhereInput";
import { ActorInShowUpdateManyMutationInput } from "../inputs/ActorInShowUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ActorInShowUpdateManyWithWhereWithoutPersonInput {
  @TypeGraphQL.Field(_type => ActorInShowScalarWhereInput, {
    nullable: false
  })
  where!: ActorInShowScalarWhereInput;

  @TypeGraphQL.Field(_type => ActorInShowUpdateManyMutationInput, {
    nullable: false
  })
  data!: ActorInShowUpdateManyMutationInput;
}
