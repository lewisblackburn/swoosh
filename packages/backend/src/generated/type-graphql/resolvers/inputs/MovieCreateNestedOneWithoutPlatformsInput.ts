import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateOrConnectWithoutPlatformsInput } from "../inputs/MovieCreateOrConnectWithoutPlatformsInput";
import { MovieCreateWithoutPlatformsInput } from "../inputs/MovieCreateWithoutPlatformsInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MovieCreateNestedOneWithoutPlatformsInput {
  @TypeGraphQL.Field(_type => MovieCreateWithoutPlatformsInput, {
    nullable: true
  })
  create?: MovieCreateWithoutPlatformsInput | undefined;

  @TypeGraphQL.Field(_type => MovieCreateOrConnectWithoutPlatformsInput, {
    nullable: true
  })
  connectOrCreate?: MovieCreateOrConnectWithoutPlatformsInput | undefined;

  @TypeGraphQL.Field(_type => MovieWhereUniqueInput, {
    nullable: true
  })
  connect?: MovieWhereUniqueInput | undefined;
}
