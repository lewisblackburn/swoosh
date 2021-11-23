import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateManyUserInputEnvelope } from "../inputs/MovieCreateManyUserInputEnvelope";
import { MovieCreateOrConnectWithoutUserInput } from "../inputs/MovieCreateOrConnectWithoutUserInput";
import { MovieCreateWithoutUserInput } from "../inputs/MovieCreateWithoutUserInput";
import { MovieScalarWhereInput } from "../inputs/MovieScalarWhereInput";
import { MovieUpdateManyWithWhereWithoutUserInput } from "../inputs/MovieUpdateManyWithWhereWithoutUserInput";
import { MovieUpdateWithWhereUniqueWithoutUserInput } from "../inputs/MovieUpdateWithWhereUniqueWithoutUserInput";
import { MovieUpsertWithWhereUniqueWithoutUserInput } from "../inputs/MovieUpsertWithWhereUniqueWithoutUserInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MovieUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [MovieCreateWithoutUserInput], {
    nullable: true
  })
  create?: MovieCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: MovieCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: MovieUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => MovieCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: MovieCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MovieWhereUniqueInput], {
    nullable: true
  })
  connect?: MovieWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieWhereUniqueInput], {
    nullable: true
  })
  set?: MovieWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieWhereUniqueInput], {
    nullable: true
  })
  disconnect?: MovieWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieWhereUniqueInput], {
    nullable: true
  })
  delete?: MovieWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: MovieUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: MovieUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MovieScalarWhereInput[] | undefined;
}
