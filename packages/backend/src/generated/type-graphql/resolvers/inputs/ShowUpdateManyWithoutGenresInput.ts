import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowCreateOrConnectWithoutGenresInput } from "../inputs/ShowCreateOrConnectWithoutGenresInput";
import { ShowCreateWithoutGenresInput } from "../inputs/ShowCreateWithoutGenresInput";
import { ShowScalarWhereInput } from "../inputs/ShowScalarWhereInput";
import { ShowUpdateManyWithWhereWithoutGenresInput } from "../inputs/ShowUpdateManyWithWhereWithoutGenresInput";
import { ShowUpdateWithWhereUniqueWithoutGenresInput } from "../inputs/ShowUpdateWithWhereUniqueWithoutGenresInput";
import { ShowUpsertWithWhereUniqueWithoutGenresInput } from "../inputs/ShowUpsertWithWhereUniqueWithoutGenresInput";
import { ShowWhereUniqueInput } from "../inputs/ShowWhereUniqueInput";

@TypeGraphQL.InputType("ShowUpdateManyWithoutGenresInput", {
  isAbstract: true
})
export class ShowUpdateManyWithoutGenresInput {
  @TypeGraphQL.Field(_type => [ShowCreateWithoutGenresInput], {
    nullable: true
  })
  create?: ShowCreateWithoutGenresInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowCreateOrConnectWithoutGenresInput], {
    nullable: true
  })
  connectOrCreate?: ShowCreateOrConnectWithoutGenresInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowUpsertWithWhereUniqueWithoutGenresInput], {
    nullable: true
  })
  upsert?: ShowUpsertWithWhereUniqueWithoutGenresInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowWhereUniqueInput], {
    nullable: true
  })
  set?: ShowWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ShowWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowWhereUniqueInput], {
    nullable: true
  })
  delete?: ShowWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowWhereUniqueInput], {
    nullable: true
  })
  connect?: ShowWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowUpdateWithWhereUniqueWithoutGenresInput], {
    nullable: true
  })
  update?: ShowUpdateWithWhereUniqueWithoutGenresInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowUpdateManyWithWhereWithoutGenresInput], {
    nullable: true
  })
  updateMany?: ShowUpdateManyWithWhereWithoutGenresInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ShowScalarWhereInput[] | undefined;
}
