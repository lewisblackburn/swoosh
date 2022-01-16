import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VoteCreateWithoutUserInput } from "../inputs/VoteCreateWithoutUserInput";
import { VoteUpdateWithoutUserInput } from "../inputs/VoteUpdateWithoutUserInput";
import { VoteWhereUniqueInput } from "../inputs/VoteWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class VoteUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => VoteWhereUniqueInput, {
    nullable: false
  })
  where!: VoteWhereUniqueInput;

  @TypeGraphQL.Field(_type => VoteUpdateWithoutUserInput, {
    nullable: false
  })
  update!: VoteUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => VoteCreateWithoutUserInput, {
    nullable: false
  })
  create!: VoteCreateWithoutUserInput;
}
