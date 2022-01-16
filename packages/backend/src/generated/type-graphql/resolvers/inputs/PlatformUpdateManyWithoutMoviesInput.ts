import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlatformCreateOrConnectWithoutMoviesInput } from "../inputs/PlatformCreateOrConnectWithoutMoviesInput";
import { PlatformCreateWithoutMoviesInput } from "../inputs/PlatformCreateWithoutMoviesInput";
import { PlatformScalarWhereInput } from "../inputs/PlatformScalarWhereInput";
import { PlatformUpdateManyWithWhereWithoutMoviesInput } from "../inputs/PlatformUpdateManyWithWhereWithoutMoviesInput";
import { PlatformUpdateWithWhereUniqueWithoutMoviesInput } from "../inputs/PlatformUpdateWithWhereUniqueWithoutMoviesInput";
import { PlatformUpsertWithWhereUniqueWithoutMoviesInput } from "../inputs/PlatformUpsertWithWhereUniqueWithoutMoviesInput";
import { PlatformWhereUniqueInput } from "../inputs/PlatformWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PlatformUpdateManyWithoutMoviesInput {
  @TypeGraphQL.Field(_type => [PlatformCreateWithoutMoviesInput], {
    nullable: true
  })
  create?: PlatformCreateWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformCreateOrConnectWithoutMoviesInput], {
    nullable: true
  })
  connectOrCreate?: PlatformCreateOrConnectWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformUpsertWithWhereUniqueWithoutMoviesInput], {
    nullable: true
  })
  upsert?: PlatformUpsertWithWhereUniqueWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformWhereUniqueInput], {
    nullable: true
  })
  connect?: PlatformWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformWhereUniqueInput], {
    nullable: true
  })
  set?: PlatformWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PlatformWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformWhereUniqueInput], {
    nullable: true
  })
  delete?: PlatformWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformUpdateWithWhereUniqueWithoutMoviesInput], {
    nullable: true
  })
  update?: PlatformUpdateWithWhereUniqueWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformUpdateManyWithWhereWithoutMoviesInput], {
    nullable: true
  })
  updateMany?: PlatformUpdateManyWithWhereWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PlatformScalarWhereInput[] | undefined;
}
