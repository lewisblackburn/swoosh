import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateOrConnectWithoutSongsInput } from "../inputs/PersonCreateOrConnectWithoutSongsInput";
import { PersonCreateWithoutSongsInput } from "../inputs/PersonCreateWithoutSongsInput";
import { PersonScalarWhereInput } from "../inputs/PersonScalarWhereInput";
import { PersonUpdateManyWithWhereWithoutSongsInput } from "../inputs/PersonUpdateManyWithWhereWithoutSongsInput";
import { PersonUpdateWithWhereUniqueWithoutSongsInput } from "../inputs/PersonUpdateWithWhereUniqueWithoutSongsInput";
import { PersonUpsertWithWhereUniqueWithoutSongsInput } from "../inputs/PersonUpsertWithWhereUniqueWithoutSongsInput";
import { PersonWhereUniqueInput } from "../inputs/PersonWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PersonUpdateManyWithoutSongsInput {
  @TypeGraphQL.Field(_type => [PersonCreateWithoutSongsInput], {
    nullable: true
  })
  create?: PersonCreateWithoutSongsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonCreateOrConnectWithoutSongsInput], {
    nullable: true
  })
  connectOrCreate?: PersonCreateOrConnectWithoutSongsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonUpsertWithWhereUniqueWithoutSongsInput], {
    nullable: true
  })
  upsert?: PersonUpsertWithWhereUniqueWithoutSongsInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [PersonUpdateWithWhereUniqueWithoutSongsInput], {
    nullable: true
  })
  update?: PersonUpdateWithWhereUniqueWithoutSongsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonUpdateManyWithWhereWithoutSongsInput], {
    nullable: true
  })
  updateMany?: PersonUpdateManyWithWhereWithoutSongsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PersonScalarWhereInput[] | undefined;
}
