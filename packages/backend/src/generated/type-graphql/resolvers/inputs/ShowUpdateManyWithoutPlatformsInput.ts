import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowCreateOrConnectWithoutPlatformsInput } from "../inputs/ShowCreateOrConnectWithoutPlatformsInput";
import { ShowCreateWithoutPlatformsInput } from "../inputs/ShowCreateWithoutPlatformsInput";
import { ShowScalarWhereInput } from "../inputs/ShowScalarWhereInput";
import { ShowUpdateManyWithWhereWithoutPlatformsInput } from "../inputs/ShowUpdateManyWithWhereWithoutPlatformsInput";
import { ShowUpdateWithWhereUniqueWithoutPlatformsInput } from "../inputs/ShowUpdateWithWhereUniqueWithoutPlatformsInput";
import { ShowUpsertWithWhereUniqueWithoutPlatformsInput } from "../inputs/ShowUpsertWithWhereUniqueWithoutPlatformsInput";
import { ShowWhereUniqueInput } from "../inputs/ShowWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ShowUpdateManyWithoutPlatformsInput {
  @TypeGraphQL.Field(_type => [ShowCreateWithoutPlatformsInput], {
    nullable: true
  })
  create?: ShowCreateWithoutPlatformsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowCreateOrConnectWithoutPlatformsInput], {
    nullable: true
  })
  connectOrCreate?: ShowCreateOrConnectWithoutPlatformsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowUpsertWithWhereUniqueWithoutPlatformsInput], {
    nullable: true
  })
  upsert?: ShowUpsertWithWhereUniqueWithoutPlatformsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowWhereUniqueInput], {
    nullable: true
  })
  connect?: ShowWhereUniqueInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [ShowUpdateWithWhereUniqueWithoutPlatformsInput], {
    nullable: true
  })
  update?: ShowUpdateWithWhereUniqueWithoutPlatformsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowUpdateManyWithWhereWithoutPlatformsInput], {
    nullable: true
  })
  updateMany?: ShowUpdateManyWithWhereWithoutPlatformsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ShowScalarWhereInput[] | undefined;
}
