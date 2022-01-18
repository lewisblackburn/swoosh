import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowCreateWithoutPlatformsInput } from "../inputs/ShowCreateWithoutPlatformsInput";
import { ShowWhereUniqueInput } from "../inputs/ShowWhereUniqueInput";

@TypeGraphQL.InputType("ShowCreateOrConnectWithoutPlatformsInput", {
  isAbstract: true
})
export class ShowCreateOrConnectWithoutPlatformsInput {
  @TypeGraphQL.Field(_type => ShowWhereUniqueInput, {
    nullable: false
  })
  where!: ShowWhereUniqueInput;

  @TypeGraphQL.Field(_type => ShowCreateWithoutPlatformsInput, {
    nullable: false
  })
  create!: ShowCreateWithoutPlatformsInput;
}
