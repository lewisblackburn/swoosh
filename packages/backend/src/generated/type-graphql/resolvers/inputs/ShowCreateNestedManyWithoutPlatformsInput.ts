import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowCreateOrConnectWithoutPlatformsInput } from "../inputs/ShowCreateOrConnectWithoutPlatformsInput";
import { ShowCreateWithoutPlatformsInput } from "../inputs/ShowCreateWithoutPlatformsInput";
import { ShowWhereUniqueInput } from "../inputs/ShowWhereUniqueInput";

@TypeGraphQL.InputType("ShowCreateNestedManyWithoutPlatformsInput", {
  isAbstract: true
})
export class ShowCreateNestedManyWithoutPlatformsInput {
  @TypeGraphQL.Field(_type => [ShowCreateWithoutPlatformsInput], {
    nullable: true
  })
  create?: ShowCreateWithoutPlatformsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowCreateOrConnectWithoutPlatformsInput], {
    nullable: true
  })
  connectOrCreate?: ShowCreateOrConnectWithoutPlatformsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowWhereUniqueInput], {
    nullable: true
  })
  connect?: ShowWhereUniqueInput[] | undefined;
}
