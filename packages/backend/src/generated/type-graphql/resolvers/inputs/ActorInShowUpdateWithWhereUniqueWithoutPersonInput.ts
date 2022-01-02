import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActorInShowUpdateWithoutPersonInput } from "../inputs/ActorInShowUpdateWithoutPersonInput";
import { ActorInShowWhereUniqueInput } from "../inputs/ActorInShowWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ActorInShowUpdateWithWhereUniqueWithoutPersonInput {
  @TypeGraphQL.Field(_type => ActorInShowWhereUniqueInput, {
    nullable: false
  })
  where!: ActorInShowWhereUniqueInput;

  @TypeGraphQL.Field(_type => ActorInShowUpdateWithoutPersonInput, {
    nullable: false
  })
  data!: ActorInShowUpdateWithoutPersonInput;
}
