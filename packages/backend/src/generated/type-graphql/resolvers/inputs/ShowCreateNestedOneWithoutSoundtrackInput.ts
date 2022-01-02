import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowCreateOrConnectWithoutSoundtrackInput } from "../inputs/ShowCreateOrConnectWithoutSoundtrackInput";
import { ShowCreateWithoutSoundtrackInput } from "../inputs/ShowCreateWithoutSoundtrackInput";
import { ShowWhereUniqueInput } from "../inputs/ShowWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ShowCreateNestedOneWithoutSoundtrackInput {
  @TypeGraphQL.Field(_type => ShowCreateWithoutSoundtrackInput, {
    nullable: true
  })
  create?: ShowCreateWithoutSoundtrackInput | undefined;

  @TypeGraphQL.Field(_type => ShowCreateOrConnectWithoutSoundtrackInput, {
    nullable: true
  })
  connectOrCreate?: ShowCreateOrConnectWithoutSoundtrackInput | undefined;

  @TypeGraphQL.Field(_type => ShowWhereUniqueInput, {
    nullable: true
  })
  connect?: ShowWhereUniqueInput | undefined;
}
