import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActorInShowCreateWithoutPersonInput } from "../inputs/ActorInShowCreateWithoutPersonInput";
import { ActorInShowUpdateWithoutPersonInput } from "../inputs/ActorInShowUpdateWithoutPersonInput";
import { ActorInShowWhereUniqueInput } from "../inputs/ActorInShowWhereUniqueInput";

@TypeGraphQL.InputType("ActorInShowUpsertWithWhereUniqueWithoutPersonInput", {
  isAbstract: true
})
export class ActorInShowUpsertWithWhereUniqueWithoutPersonInput {
  @TypeGraphQL.Field(_type => ActorInShowWhereUniqueInput, {
    nullable: false
  })
  where!: ActorInShowWhereUniqueInput;

  @TypeGraphQL.Field(_type => ActorInShowUpdateWithoutPersonInput, {
    nullable: false
  })
  update!: ActorInShowUpdateWithoutPersonInput;

  @TypeGraphQL.Field(_type => ActorInShowCreateWithoutPersonInput, {
    nullable: false
  })
  create!: ActorInShowCreateWithoutPersonInput;
}
