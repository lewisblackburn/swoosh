import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlatformCreateOrConnectWithoutMoviesInput } from "../inputs/PlatformCreateOrConnectWithoutMoviesInput";
import { PlatformCreateWithoutMoviesInput } from "../inputs/PlatformCreateWithoutMoviesInput";
import { PlatformWhereUniqueInput } from "../inputs/PlatformWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PlatformCreateNestedManyWithoutMoviesInput {
  @TypeGraphQL.Field(_type => [PlatformCreateWithoutMoviesInput], {
    nullable: true
  })
  create?: PlatformCreateWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformCreateOrConnectWithoutMoviesInput], {
    nullable: true
  })
  connectOrCreate?: PlatformCreateOrConnectWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformWhereUniqueInput], {
    nullable: true
  })
  connect?: PlatformWhereUniqueInput[] | undefined;
}
