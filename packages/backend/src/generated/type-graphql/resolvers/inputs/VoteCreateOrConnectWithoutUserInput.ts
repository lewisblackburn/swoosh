import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VoteCreateWithoutUserInput } from "../inputs/VoteCreateWithoutUserInput";
import { VoteWhereUniqueInput } from "../inputs/VoteWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class VoteCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => VoteWhereUniqueInput, {
    nullable: false
  })
  where!: VoteWhereUniqueInput;

  @TypeGraphQL.Field(_type => VoteCreateWithoutUserInput, {
    nullable: false
  })
  create!: VoteCreateWithoutUserInput;
}
