import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongInShowCreateManyShowInputEnvelope } from "../inputs/SongInShowCreateManyShowInputEnvelope";
import { SongInShowCreateOrConnectWithoutShowInput } from "../inputs/SongInShowCreateOrConnectWithoutShowInput";
import { SongInShowCreateWithoutShowInput } from "../inputs/SongInShowCreateWithoutShowInput";
import { SongInShowWhereUniqueInput } from "../inputs/SongInShowWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SongInShowCreateNestedManyWithoutShowInput {
  @TypeGraphQL.Field(_type => [SongInShowCreateWithoutShowInput], {
    nullable: true
  })
  create?: SongInShowCreateWithoutShowInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongInShowCreateOrConnectWithoutShowInput], {
    nullable: true
  })
  connectOrCreate?: SongInShowCreateOrConnectWithoutShowInput[] | undefined;

  @TypeGraphQL.Field(_type => SongInShowCreateManyShowInputEnvelope, {
    nullable: true
  })
  createMany?: SongInShowCreateManyShowInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SongInShowWhereUniqueInput], {
    nullable: true
  })
  connect?: SongInShowWhereUniqueInput[] | undefined;
}
