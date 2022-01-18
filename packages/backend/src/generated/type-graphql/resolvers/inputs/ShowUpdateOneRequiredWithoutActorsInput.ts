import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowCreateOrConnectWithoutActorsInput } from "../inputs/ShowCreateOrConnectWithoutActorsInput";
import { ShowCreateWithoutActorsInput } from "../inputs/ShowCreateWithoutActorsInput";
import { ShowUpdateWithoutActorsInput } from "../inputs/ShowUpdateWithoutActorsInput";
import { ShowUpsertWithoutActorsInput } from "../inputs/ShowUpsertWithoutActorsInput";
import { ShowWhereUniqueInput } from "../inputs/ShowWhereUniqueInput";

@TypeGraphQL.InputType("ShowUpdateOneRequiredWithoutActorsInput", {
  isAbstract: true
})
export class ShowUpdateOneRequiredWithoutActorsInput {
  @TypeGraphQL.Field(_type => ShowCreateWithoutActorsInput, {
    nullable: true
  })
  create?: ShowCreateWithoutActorsInput | undefined;

  @TypeGraphQL.Field(_type => ShowCreateOrConnectWithoutActorsInput, {
    nullable: true
  })
  connectOrCreate?: ShowCreateOrConnectWithoutActorsInput | undefined;

  @TypeGraphQL.Field(_type => ShowUpsertWithoutActorsInput, {
    nullable: true
  })
  upsert?: ShowUpsertWithoutActorsInput | undefined;

  @TypeGraphQL.Field(_type => ShowWhereUniqueInput, {
    nullable: true
  })
  connect?: ShowWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ShowUpdateWithoutActorsInput, {
    nullable: true
  })
  update?: ShowUpdateWithoutActorsInput | undefined;
}
