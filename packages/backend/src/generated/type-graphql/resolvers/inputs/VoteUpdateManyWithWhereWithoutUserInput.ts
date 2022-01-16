import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VoteScalarWhereInput } from "../inputs/VoteScalarWhereInput";
import { VoteUpdateManyMutationInput } from "../inputs/VoteUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class VoteUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => VoteScalarWhereInput, {
    nullable: false
  })
  where!: VoteScalarWhereInput;

  @TypeGraphQL.Field(_type => VoteUpdateManyMutationInput, {
    nullable: false
  })
  data!: VoteUpdateManyMutationInput;
}
