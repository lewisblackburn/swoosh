import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateManyUserInputEnvelope } from "../inputs/SongCreateManyUserInputEnvelope";
import { SongCreateOrConnectWithoutUserInput } from "../inputs/SongCreateOrConnectWithoutUserInput";
import { SongCreateWithoutUserInput } from "../inputs/SongCreateWithoutUserInput";
import { SongWhereUniqueInput } from "../inputs/SongWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SongCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [SongCreateWithoutUserInput], {
    nullable: true
  })
  create?: SongCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: SongCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => SongCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: SongCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SongWhereUniqueInput], {
    nullable: true
  })
  connect?: SongWhereUniqueInput[] | undefined;
}
