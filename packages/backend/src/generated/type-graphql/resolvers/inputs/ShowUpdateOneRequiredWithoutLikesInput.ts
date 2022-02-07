import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowCreateOrConnectWithoutLikesInput } from "../inputs/ShowCreateOrConnectWithoutLikesInput";
import { ShowCreateWithoutLikesInput } from "../inputs/ShowCreateWithoutLikesInput";
import { ShowUpdateWithoutLikesInput } from "../inputs/ShowUpdateWithoutLikesInput";
import { ShowUpsertWithoutLikesInput } from "../inputs/ShowUpsertWithoutLikesInput";
import { ShowWhereUniqueInput } from "../inputs/ShowWhereUniqueInput";

@TypeGraphQL.InputType("ShowUpdateOneRequiredWithoutLikesInput", {
  isAbstract: true
})
export class ShowUpdateOneRequiredWithoutLikesInput {
  @TypeGraphQL.Field(_type => ShowCreateWithoutLikesInput, {
    nullable: true
  })
  create?: ShowCreateWithoutLikesInput | undefined;

  @TypeGraphQL.Field(_type => ShowCreateOrConnectWithoutLikesInput, {
    nullable: true
  })
  connectOrCreate?: ShowCreateOrConnectWithoutLikesInput | undefined;

  @TypeGraphQL.Field(_type => ShowUpsertWithoutLikesInput, {
    nullable: true
  })
  upsert?: ShowUpsertWithoutLikesInput | undefined;

  @TypeGraphQL.Field(_type => ShowWhereUniqueInput, {
    nullable: true
  })
  connect?: ShowWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ShowUpdateWithoutLikesInput, {
    nullable: true
  })
  update?: ShowUpdateWithoutLikesInput | undefined;
}
