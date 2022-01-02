import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowCreateOrConnectWithoutSoundtrackInput } from "../inputs/ShowCreateOrConnectWithoutSoundtrackInput";
import { ShowCreateWithoutSoundtrackInput } from "../inputs/ShowCreateWithoutSoundtrackInput";
import { ShowUpdateWithoutSoundtrackInput } from "../inputs/ShowUpdateWithoutSoundtrackInput";
import { ShowUpsertWithoutSoundtrackInput } from "../inputs/ShowUpsertWithoutSoundtrackInput";
import { ShowWhereUniqueInput } from "../inputs/ShowWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ShowUpdateOneRequiredWithoutSoundtrackInput {
  @TypeGraphQL.Field(_type => ShowCreateWithoutSoundtrackInput, {
    nullable: true
  })
  create?: ShowCreateWithoutSoundtrackInput | undefined;

  @TypeGraphQL.Field(_type => ShowCreateOrConnectWithoutSoundtrackInput, {
    nullable: true
  })
  connectOrCreate?: ShowCreateOrConnectWithoutSoundtrackInput | undefined;

  @TypeGraphQL.Field(_type => ShowUpsertWithoutSoundtrackInput, {
    nullable: true
  })
  upsert?: ShowUpsertWithoutSoundtrackInput | undefined;

  @TypeGraphQL.Field(_type => ShowWhereUniqueInput, {
    nullable: true
  })
  connect?: ShowWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ShowUpdateWithoutSoundtrackInput, {
    nullable: true
  })
  update?: ShowUpdateWithoutSoundtrackInput | undefined;
}
