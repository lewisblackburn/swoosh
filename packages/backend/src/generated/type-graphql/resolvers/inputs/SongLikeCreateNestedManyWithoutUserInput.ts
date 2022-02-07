import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongLikeCreateManyUserInputEnvelope } from "../inputs/SongLikeCreateManyUserInputEnvelope";
import { SongLikeCreateOrConnectWithoutUserInput } from "../inputs/SongLikeCreateOrConnectWithoutUserInput";
import { SongLikeCreateWithoutUserInput } from "../inputs/SongLikeCreateWithoutUserInput";
import { SongLikeWhereUniqueInput } from "../inputs/SongLikeWhereUniqueInput";

@TypeGraphQL.InputType("SongLikeCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class SongLikeCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [SongLikeCreateWithoutUserInput], {
    nullable: true
  })
  create?: SongLikeCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongLikeCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: SongLikeCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => SongLikeCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: SongLikeCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SongLikeWhereUniqueInput], {
    nullable: true
  })
  connect?: SongLikeWhereUniqueInput[] | undefined;
}
