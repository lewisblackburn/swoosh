import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateOrConnectWithoutMoviesInput } from "../inputs/PersonCreateOrConnectWithoutMoviesInput";
import { PersonCreateWithoutMoviesInput } from "../inputs/PersonCreateWithoutMoviesInput";
import { PersonScalarWhereInput } from "../inputs/PersonScalarWhereInput";
import { PersonUpdateManyWithWhereWithoutMoviesInput } from "../inputs/PersonUpdateManyWithWhereWithoutMoviesInput";
import { PersonUpdateWithWhereUniqueWithoutMoviesInput } from "../inputs/PersonUpdateWithWhereUniqueWithoutMoviesInput";
import { PersonUpsertWithWhereUniqueWithoutMoviesInput } from "../inputs/PersonUpsertWithWhereUniqueWithoutMoviesInput";
import { PersonWhereUniqueInput } from "../inputs/PersonWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PersonUpdateManyWithoutMoviesInput {
  @TypeGraphQL.Field(_type => [PersonCreateWithoutMoviesInput], {
    nullable: true
  })
  create?: PersonCreateWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonCreateOrConnectWithoutMoviesInput], {
    nullable: true
  })
  connectOrCreate?: PersonCreateOrConnectWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonUpsertWithWhereUniqueWithoutMoviesInput], {
    nullable: true
  })
  upsert?: PersonUpsertWithWhereUniqueWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonWhereUniqueInput], {
    nullable: true
  })
  connect?: PersonWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonWhereUniqueInput], {
    nullable: true
  })
  set?: PersonWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PersonWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonWhereUniqueInput], {
    nullable: true
  })
  delete?: PersonWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonUpdateWithWhereUniqueWithoutMoviesInput], {
    nullable: true
  })
  update?: PersonUpdateWithWhereUniqueWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonUpdateManyWithWhereWithoutMoviesInput], {
    nullable: true
  })
  updateMany?: PersonUpdateManyWithWhereWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PersonScalarWhereInput[] | undefined;
}
