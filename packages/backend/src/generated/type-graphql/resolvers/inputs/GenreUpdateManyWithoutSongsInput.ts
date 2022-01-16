import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenreCreateOrConnectWithoutSongsInput } from "../inputs/GenreCreateOrConnectWithoutSongsInput";
import { GenreCreateWithoutSongsInput } from "../inputs/GenreCreateWithoutSongsInput";
import { GenreScalarWhereInput } from "../inputs/GenreScalarWhereInput";
import { GenreUpdateManyWithWhereWithoutSongsInput } from "../inputs/GenreUpdateManyWithWhereWithoutSongsInput";
import { GenreUpdateWithWhereUniqueWithoutSongsInput } from "../inputs/GenreUpdateWithWhereUniqueWithoutSongsInput";
import { GenreUpsertWithWhereUniqueWithoutSongsInput } from "../inputs/GenreUpsertWithWhereUniqueWithoutSongsInput";
import { GenreWhereUniqueInput } from "../inputs/GenreWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class GenreUpdateManyWithoutSongsInput {
  @TypeGraphQL.Field(_type => [GenreCreateWithoutSongsInput], {
    nullable: true
  })
  create?: GenreCreateWithoutSongsInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenreCreateOrConnectWithoutSongsInput], {
    nullable: true
  })
  connectOrCreate?: GenreCreateOrConnectWithoutSongsInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenreUpsertWithWhereUniqueWithoutSongsInput], {
    nullable: true
  })
  upsert?: GenreUpsertWithWhereUniqueWithoutSongsInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenreWhereUniqueInput], {
    nullable: true
  })
  connect?: GenreWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenreWhereUniqueInput], {
    nullable: true
  })
  set?: GenreWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenreWhereUniqueInput], {
    nullable: true
  })
  disconnect?: GenreWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenreWhereUniqueInput], {
    nullable: true
  })
  delete?: GenreWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenreUpdateWithWhereUniqueWithoutSongsInput], {
    nullable: true
  })
  update?: GenreUpdateWithWhereUniqueWithoutSongsInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenreUpdateManyWithWhereWithoutSongsInput], {
    nullable: true
  })
  updateMany?: GenreUpdateManyWithWhereWithoutSongsInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenreScalarWhereInput], {
    nullable: true
  })
  deleteMany?: GenreScalarWhereInput[] | undefined;
}
