import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookLikeCreateManyBookInputEnvelope } from "../inputs/BookLikeCreateManyBookInputEnvelope";
import { BookLikeCreateOrConnectWithoutBookInput } from "../inputs/BookLikeCreateOrConnectWithoutBookInput";
import { BookLikeCreateWithoutBookInput } from "../inputs/BookLikeCreateWithoutBookInput";
import { BookLikeScalarWhereInput } from "../inputs/BookLikeScalarWhereInput";
import { BookLikeUpdateManyWithWhereWithoutBookInput } from "../inputs/BookLikeUpdateManyWithWhereWithoutBookInput";
import { BookLikeUpdateWithWhereUniqueWithoutBookInput } from "../inputs/BookLikeUpdateWithWhereUniqueWithoutBookInput";
import { BookLikeUpsertWithWhereUniqueWithoutBookInput } from "../inputs/BookLikeUpsertWithWhereUniqueWithoutBookInput";
import { BookLikeWhereUniqueInput } from "../inputs/BookLikeWhereUniqueInput";

@TypeGraphQL.InputType("BookLikeUpdateManyWithoutBookInput", {
  isAbstract: true
})
export class BookLikeUpdateManyWithoutBookInput {
  @TypeGraphQL.Field(_type => [BookLikeCreateWithoutBookInput], {
    nullable: true
  })
  create?: BookLikeCreateWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookLikeCreateOrConnectWithoutBookInput], {
    nullable: true
  })
  connectOrCreate?: BookLikeCreateOrConnectWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookLikeUpsertWithWhereUniqueWithoutBookInput], {
    nullable: true
  })
  upsert?: BookLikeUpsertWithWhereUniqueWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(_type => BookLikeCreateManyBookInputEnvelope, {
    nullable: true
  })
  createMany?: BookLikeCreateManyBookInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [BookLikeUpdateWithWhereUniqueWithoutBookInput], {
    nullable: true
  })
  update?: BookLikeUpdateWithWhereUniqueWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookLikeUpdateManyWithWhereWithoutBookInput], {
    nullable: true
  })
  updateMany?: BookLikeUpdateManyWithWhereWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookLikeScalarWhereInput], {
    nullable: true
  })
  deleteMany?: BookLikeScalarWhereInput[] | undefined;
}
