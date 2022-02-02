import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateOrConnectWithoutLikesInput } from "../inputs/MovieCreateOrConnectWithoutLikesInput";
import { MovieCreateWithoutLikesInput } from "../inputs/MovieCreateWithoutLikesInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType("MovieCreateNestedOneWithoutLikesInput", {
  isAbstract: true
})
export class MovieCreateNestedOneWithoutLikesInput {
  @TypeGraphQL.Field(_type => MovieCreateWithoutLikesInput, {
    nullable: true
  })
  create?: MovieCreateWithoutLikesInput | undefined;

  @TypeGraphQL.Field(_type => MovieCreateOrConnectWithoutLikesInput, {
    nullable: true
  })
  connectOrCreate?: MovieCreateOrConnectWithoutLikesInput | undefined;

  @TypeGraphQL.Field(_type => MovieWhereUniqueInput, {
    nullable: true
  })
  connect?: MovieWhereUniqueInput | undefined;
}
