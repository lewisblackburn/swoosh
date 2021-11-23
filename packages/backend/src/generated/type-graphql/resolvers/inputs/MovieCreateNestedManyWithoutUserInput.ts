import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateManyUserInputEnvelope } from "../inputs/MovieCreateManyUserInputEnvelope";
import { MovieCreateOrConnectWithoutUserInput } from "../inputs/MovieCreateOrConnectWithoutUserInput";
import { MovieCreateWithoutUserInput } from "../inputs/MovieCreateWithoutUserInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MovieCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [MovieCreateWithoutUserInput], {
    nullable: true
  })
  create?: MovieCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: MovieCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => MovieCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: MovieCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MovieWhereUniqueInput], {
    nullable: true
  })
  connect?: MovieWhereUniqueInput[] | undefined;
}
