import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateOrConnectWithoutSongsInput } from "../inputs/PersonCreateOrConnectWithoutSongsInput";
import { PersonCreateWithoutSongsInput } from "../inputs/PersonCreateWithoutSongsInput";
import { PersonUpdateWithoutSongsInput } from "../inputs/PersonUpdateWithoutSongsInput";
import { PersonUpsertWithoutSongsInput } from "../inputs/PersonUpsertWithoutSongsInput";
import { PersonWhereUniqueInput } from "../inputs/PersonWhereUniqueInput";

@TypeGraphQL.InputType("PersonUpdateOneRequiredWithoutSongsInput", {
  isAbstract: true
})
export class PersonUpdateOneRequiredWithoutSongsInput {
  @TypeGraphQL.Field(_type => PersonCreateWithoutSongsInput, {
    nullable: true
  })
  create?: PersonCreateWithoutSongsInput | undefined;

  @TypeGraphQL.Field(_type => PersonCreateOrConnectWithoutSongsInput, {
    nullable: true
  })
  connectOrCreate?: PersonCreateOrConnectWithoutSongsInput | undefined;

  @TypeGraphQL.Field(_type => PersonUpsertWithoutSongsInput, {
    nullable: true
  })
  upsert?: PersonUpsertWithoutSongsInput | undefined;

  @TypeGraphQL.Field(_type => PersonWhereUniqueInput, {
    nullable: true
  })
  connect?: PersonWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PersonUpdateWithoutSongsInput, {
    nullable: true
  })
  update?: PersonUpdateWithoutSongsInput | undefined;
}
