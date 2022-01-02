import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowCreateOrConnectWithoutPlatformsInput } from "../inputs/ShowCreateOrConnectWithoutPlatformsInput";
import { ShowCreateWithoutPlatformsInput } from "../inputs/ShowCreateWithoutPlatformsInput";
import { ShowUpdateWithoutPlatformsInput } from "../inputs/ShowUpdateWithoutPlatformsInput";
import { ShowUpsertWithoutPlatformsInput } from "../inputs/ShowUpsertWithoutPlatformsInput";
import { ShowWhereUniqueInput } from "../inputs/ShowWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ShowUpdateOneRequiredWithoutPlatformsInput {
  @TypeGraphQL.Field(_type => ShowCreateWithoutPlatformsInput, {
    nullable: true
  })
  create?: ShowCreateWithoutPlatformsInput | undefined;

  @TypeGraphQL.Field(_type => ShowCreateOrConnectWithoutPlatformsInput, {
    nullable: true
  })
  connectOrCreate?: ShowCreateOrConnectWithoutPlatformsInput | undefined;

  @TypeGraphQL.Field(_type => ShowUpsertWithoutPlatformsInput, {
    nullable: true
  })
  upsert?: ShowUpsertWithoutPlatformsInput | undefined;

  @TypeGraphQL.Field(_type => ShowWhereUniqueInput, {
    nullable: true
  })
  connect?: ShowWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ShowUpdateWithoutPlatformsInput, {
    nullable: true
  })
  update?: ShowUpdateWithoutPlatformsInput | undefined;
}
