import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowCreateWithoutSoundtrackInput } from "../inputs/ShowCreateWithoutSoundtrackInput";
import { ShowWhereUniqueInput } from "../inputs/ShowWhereUniqueInput";

@TypeGraphQL.InputType("ShowCreateOrConnectWithoutSoundtrackInput", {
  isAbstract: true
})
export class ShowCreateOrConnectWithoutSoundtrackInput {
  @TypeGraphQL.Field(_type => ShowWhereUniqueInput, {
    nullable: false
  })
  where!: ShowWhereUniqueInput;

  @TypeGraphQL.Field(_type => ShowCreateWithoutSoundtrackInput, {
    nullable: false
  })
  create!: ShowCreateWithoutSoundtrackInput;
}
