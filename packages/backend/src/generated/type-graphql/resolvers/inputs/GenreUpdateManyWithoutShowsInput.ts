import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenreCreateOrConnectWithoutShowsInput } from "../inputs/GenreCreateOrConnectWithoutShowsInput";
import { GenreCreateWithoutShowsInput } from "../inputs/GenreCreateWithoutShowsInput";
import { GenreScalarWhereInput } from "../inputs/GenreScalarWhereInput";
import { GenreUpdateManyWithWhereWithoutShowsInput } from "../inputs/GenreUpdateManyWithWhereWithoutShowsInput";
import { GenreUpdateWithWhereUniqueWithoutShowsInput } from "../inputs/GenreUpdateWithWhereUniqueWithoutShowsInput";
import { GenreUpsertWithWhereUniqueWithoutShowsInput } from "../inputs/GenreUpsertWithWhereUniqueWithoutShowsInput";
import { GenreWhereUniqueInput } from "../inputs/GenreWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class GenreUpdateManyWithoutShowsInput {
  @TypeGraphQL.Field(_type => [GenreCreateWithoutShowsInput], {
    nullable: true
  })
  create?: GenreCreateWithoutShowsInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenreCreateOrConnectWithoutShowsInput], {
    nullable: true
  })
  connectOrCreate?: GenreCreateOrConnectWithoutShowsInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenreUpsertWithWhereUniqueWithoutShowsInput], {
    nullable: true
  })
  upsert?: GenreUpsertWithWhereUniqueWithoutShowsInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [GenreUpdateWithWhereUniqueWithoutShowsInput], {
    nullable: true
  })
  update?: GenreUpdateWithWhereUniqueWithoutShowsInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenreUpdateManyWithWhereWithoutShowsInput], {
    nullable: true
  })
  updateMany?: GenreUpdateManyWithWhereWithoutShowsInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenreScalarWhereInput], {
    nullable: true
  })
  deleteMany?: GenreScalarWhereInput[] | undefined;
}
