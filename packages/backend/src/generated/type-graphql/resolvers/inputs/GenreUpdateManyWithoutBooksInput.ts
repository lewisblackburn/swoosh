import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenreCreateOrConnectWithoutBooksInput } from "../inputs/GenreCreateOrConnectWithoutBooksInput";
import { GenreCreateWithoutBooksInput } from "../inputs/GenreCreateWithoutBooksInput";
import { GenreScalarWhereInput } from "../inputs/GenreScalarWhereInput";
import { GenreUpdateManyWithWhereWithoutBooksInput } from "../inputs/GenreUpdateManyWithWhereWithoutBooksInput";
import { GenreUpdateWithWhereUniqueWithoutBooksInput } from "../inputs/GenreUpdateWithWhereUniqueWithoutBooksInput";
import { GenreUpsertWithWhereUniqueWithoutBooksInput } from "../inputs/GenreUpsertWithWhereUniqueWithoutBooksInput";
import { GenreWhereUniqueInput } from "../inputs/GenreWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class GenreUpdateManyWithoutBooksInput {
  @TypeGraphQL.Field(_type => [GenreCreateWithoutBooksInput], {
    nullable: true
  })
  create?: GenreCreateWithoutBooksInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenreCreateOrConnectWithoutBooksInput], {
    nullable: true
  })
  connectOrCreate?: GenreCreateOrConnectWithoutBooksInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenreUpsertWithWhereUniqueWithoutBooksInput], {
    nullable: true
  })
  upsert?: GenreUpsertWithWhereUniqueWithoutBooksInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [GenreUpdateWithWhereUniqueWithoutBooksInput], {
    nullable: true
  })
  update?: GenreUpdateWithWhereUniqueWithoutBooksInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenreUpdateManyWithWhereWithoutBooksInput], {
    nullable: true
  })
  updateMany?: GenreUpdateManyWithWhereWithoutBooksInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenreScalarWhereInput], {
    nullable: true
  })
  deleteMany?: GenreScalarWhereInput[] | undefined;
}
