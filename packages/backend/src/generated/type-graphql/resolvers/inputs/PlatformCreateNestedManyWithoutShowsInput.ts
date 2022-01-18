import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlatformCreateOrConnectWithoutShowsInput } from "../inputs/PlatformCreateOrConnectWithoutShowsInput";
import { PlatformCreateWithoutShowsInput } from "../inputs/PlatformCreateWithoutShowsInput";
import { PlatformWhereUniqueInput } from "../inputs/PlatformWhereUniqueInput";

@TypeGraphQL.InputType("PlatformCreateNestedManyWithoutShowsInput", {
  isAbstract: true
})
export class PlatformCreateNestedManyWithoutShowsInput {
  @TypeGraphQL.Field(_type => [PlatformCreateWithoutShowsInput], {
    nullable: true
  })
  create?: PlatformCreateWithoutShowsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformCreateOrConnectWithoutShowsInput], {
    nullable: true
  })
  connectOrCreate?: PlatformCreateOrConnectWithoutShowsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformWhereUniqueInput], {
    nullable: true
  })
  connect?: PlatformWhereUniqueInput[] | undefined;
}
