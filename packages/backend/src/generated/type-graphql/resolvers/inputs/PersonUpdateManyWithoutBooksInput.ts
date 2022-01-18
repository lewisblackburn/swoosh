import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateOrConnectWithoutBooksInput } from "../inputs/PersonCreateOrConnectWithoutBooksInput";
import { PersonCreateWithoutBooksInput } from "../inputs/PersonCreateWithoutBooksInput";
import { PersonScalarWhereInput } from "../inputs/PersonScalarWhereInput";
import { PersonUpdateManyWithWhereWithoutBooksInput } from "../inputs/PersonUpdateManyWithWhereWithoutBooksInput";
import { PersonUpdateWithWhereUniqueWithoutBooksInput } from "../inputs/PersonUpdateWithWhereUniqueWithoutBooksInput";
import { PersonUpsertWithWhereUniqueWithoutBooksInput } from "../inputs/PersonUpsertWithWhereUniqueWithoutBooksInput";
import { PersonWhereUniqueInput } from "../inputs/PersonWhereUniqueInput";

@TypeGraphQL.InputType("PersonUpdateManyWithoutBooksInput", {
  isAbstract: true
})
export class PersonUpdateManyWithoutBooksInput {
  @TypeGraphQL.Field(_type => [PersonCreateWithoutBooksInput], {
    nullable: true
  })
  create?: PersonCreateWithoutBooksInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonCreateOrConnectWithoutBooksInput], {
    nullable: true
  })
  connectOrCreate?: PersonCreateOrConnectWithoutBooksInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonUpsertWithWhereUniqueWithoutBooksInput], {
    nullable: true
  })
  upsert?: PersonUpsertWithWhereUniqueWithoutBooksInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonWhereUniqueInput], {
    nullable: true
  })
  set?: PersonWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PersonWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonWhereUniqueInput], {
    nullable: true
  })
  delete?: PersonWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonWhereUniqueInput], {
    nullable: true
  })
  connect?: PersonWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonUpdateWithWhereUniqueWithoutBooksInput], {
    nullable: true
  })
  update?: PersonUpdateWithWhereUniqueWithoutBooksInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonUpdateManyWithWhereWithoutBooksInput], {
    nullable: true
  })
  updateMany?: PersonUpdateManyWithWhereWithoutBooksInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PersonScalarWhereInput[] | undefined;
}
