import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlatformCreateOrConnectWithoutShowsInput } from "../inputs/PlatformCreateOrConnectWithoutShowsInput";
import { PlatformCreateWithoutShowsInput } from "../inputs/PlatformCreateWithoutShowsInput";
import { PlatformScalarWhereInput } from "../inputs/PlatformScalarWhereInput";
import { PlatformUpdateManyWithWhereWithoutShowsInput } from "../inputs/PlatformUpdateManyWithWhereWithoutShowsInput";
import { PlatformUpdateWithWhereUniqueWithoutShowsInput } from "../inputs/PlatformUpdateWithWhereUniqueWithoutShowsInput";
import { PlatformUpsertWithWhereUniqueWithoutShowsInput } from "../inputs/PlatformUpsertWithWhereUniqueWithoutShowsInput";
import { PlatformWhereUniqueInput } from "../inputs/PlatformWhereUniqueInput";

@TypeGraphQL.InputType("PlatformUpdateManyWithoutShowsInput", {
  isAbstract: true
})
export class PlatformUpdateManyWithoutShowsInput {
  @TypeGraphQL.Field(_type => [PlatformCreateWithoutShowsInput], {
    nullable: true
  })
  create?: PlatformCreateWithoutShowsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformCreateOrConnectWithoutShowsInput], {
    nullable: true
  })
  connectOrCreate?: PlatformCreateOrConnectWithoutShowsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformUpsertWithWhereUniqueWithoutShowsInput], {
    nullable: true
  })
  upsert?: PlatformUpsertWithWhereUniqueWithoutShowsInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [PlatformWhereUniqueInput], {
    nullable: true
  })
  connect?: PlatformWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformUpdateWithWhereUniqueWithoutShowsInput], {
    nullable: true
  })
  update?: PlatformUpdateWithWhereUniqueWithoutShowsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformUpdateManyWithWhereWithoutShowsInput], {
    nullable: true
  })
  updateMany?: PlatformUpdateManyWithWhereWithoutShowsInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlatformScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PlatformScalarWhereInput[] | undefined;
}
