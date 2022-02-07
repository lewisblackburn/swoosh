import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowLikeCreateManyShowInputEnvelope } from "../inputs/ShowLikeCreateManyShowInputEnvelope";
import { ShowLikeCreateOrConnectWithoutShowInput } from "../inputs/ShowLikeCreateOrConnectWithoutShowInput";
import { ShowLikeCreateWithoutShowInput } from "../inputs/ShowLikeCreateWithoutShowInput";
import { ShowLikeWhereUniqueInput } from "../inputs/ShowLikeWhereUniqueInput";

@TypeGraphQL.InputType("ShowLikeCreateNestedManyWithoutShowInput", {
  isAbstract: true
})
export class ShowLikeCreateNestedManyWithoutShowInput {
  @TypeGraphQL.Field(_type => [ShowLikeCreateWithoutShowInput], {
    nullable: true
  })
  create?: ShowLikeCreateWithoutShowInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowLikeCreateOrConnectWithoutShowInput], {
    nullable: true
  })
  connectOrCreate?: ShowLikeCreateOrConnectWithoutShowInput[] | undefined;

  @TypeGraphQL.Field(_type => ShowLikeCreateManyShowInputEnvelope, {
    nullable: true
  })
  createMany?: ShowLikeCreateManyShowInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ShowLikeWhereUniqueInput], {
    nullable: true
  })
  connect?: ShowLikeWhereUniqueInput[] | undefined;
}
