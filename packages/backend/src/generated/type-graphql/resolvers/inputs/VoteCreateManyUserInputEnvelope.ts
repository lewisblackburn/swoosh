import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VoteCreateManyUserInput } from "../inputs/VoteCreateManyUserInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class VoteCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [VoteCreateManyUserInput], {
    nullable: false
  })
  data!: VoteCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
