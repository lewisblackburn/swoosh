import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookLikeCreateManyUserInputEnvelope } from "../inputs/BookLikeCreateManyUserInputEnvelope";
import { BookLikeCreateOrConnectWithoutUserInput } from "../inputs/BookLikeCreateOrConnectWithoutUserInput";
import { BookLikeCreateWithoutUserInput } from "../inputs/BookLikeCreateWithoutUserInput";
import { BookLikeScalarWhereInput } from "../inputs/BookLikeScalarWhereInput";
import { BookLikeUpdateManyWithWhereWithoutUserInput } from "../inputs/BookLikeUpdateManyWithWhereWithoutUserInput";
import { BookLikeUpdateWithWhereUniqueWithoutUserInput } from "../inputs/BookLikeUpdateWithWhereUniqueWithoutUserInput";
import { BookLikeUpsertWithWhereUniqueWithoutUserInput } from "../inputs/BookLikeUpsertWithWhereUniqueWithoutUserInput";
import { BookLikeWhereUniqueInput } from "../inputs/BookLikeWhereUniqueInput";

@TypeGraphQL.InputType("BookLikeUpdateManyWithoutUserInput", {
  isAbstract: true
})
export class BookLikeUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [BookLikeCreateWithoutUserInput], {
    nullable: true
  })
  create?: BookLikeCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookLikeCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: BookLikeCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookLikeUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: BookLikeUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => BookLikeCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: BookLikeCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BookLikeWhereUniqueInput], {
    nullable: true
  })
  set?: BookLikeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookLikeWhereUniqueInput], {
    nullable: true
  })
  disconnect?: BookLikeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookLikeWhereUniqueInput], {
    nullable: true
  })
  delete?: BookLikeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookLikeWhereUniqueInput], {
    nullable: true
  })
  connect?: BookLikeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookLikeUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: BookLikeUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookLikeUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: BookLikeUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookLikeScalarWhereInput], {
    nullable: true
  })
  deleteMany?: BookLikeScalarWhereInput[] | undefined;
}
