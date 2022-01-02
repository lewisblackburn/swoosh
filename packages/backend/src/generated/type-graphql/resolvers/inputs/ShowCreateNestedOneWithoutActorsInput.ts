import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowCreateOrConnectWithoutActorsInput } from "../inputs/ShowCreateOrConnectWithoutActorsInput";
import { ShowCreateWithoutActorsInput } from "../inputs/ShowCreateWithoutActorsInput";
import { ShowWhereUniqueInput } from "../inputs/ShowWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ShowCreateNestedOneWithoutActorsInput {
  @TypeGraphQL.Field(_type => ShowCreateWithoutActorsInput, {
    nullable: true
  })
  create?: ShowCreateWithoutActorsInput | undefined;

  @TypeGraphQL.Field(_type => ShowCreateOrConnectWithoutActorsInput, {
    nullable: true
  })
  connectOrCreate?: ShowCreateOrConnectWithoutActorsInput | undefined;

  @TypeGraphQL.Field(_type => ShowWhereUniqueInput, {
    nullable: true
  })
  connect?: ShowWhereUniqueInput | undefined;
}
