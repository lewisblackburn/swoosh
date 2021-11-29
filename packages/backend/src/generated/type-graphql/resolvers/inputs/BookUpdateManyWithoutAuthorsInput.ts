import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateOrConnectWithoutAuthorsInput } from "../inputs/BookCreateOrConnectWithoutAuthorsInput";
import { BookCreateWithoutAuthorsInput } from "../inputs/BookCreateWithoutAuthorsInput";
import { BookScalarWhereInput } from "../inputs/BookScalarWhereInput";
import { BookUpdateManyWithWhereWithoutAuthorsInput } from "../inputs/BookUpdateManyWithWhereWithoutAuthorsInput";
import { BookUpdateWithWhereUniqueWithoutAuthorsInput } from "../inputs/BookUpdateWithWhereUniqueWithoutAuthorsInput";
import { BookUpsertWithWhereUniqueWithoutAuthorsInput } from "../inputs/BookUpsertWithWhereUniqueWithoutAuthorsInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BookUpdateManyWithoutAuthorsInput {
  @TypeGraphQL.Field(_type => [BookCreateWithoutAuthorsInput], {
    nullable: true
  })
  create?: BookCreateWithoutAuthorsInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookCreateOrConnectWithoutAuthorsInput], {
    nullable: true
  })
  connectOrCreate?: BookCreateOrConnectWithoutAuthorsInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookUpsertWithWhereUniqueWithoutAuthorsInput], {
    nullable: true
  })
  upsert?: BookUpsertWithWhereUniqueWithoutAuthorsInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookWhereUniqueInput], {
    nullable: true
  })
  connect?: BookWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookWhereUniqueInput], {
    nullable: true
  })
  set?: BookWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookWhereUniqueInput], {
    nullable: true
  })
  disconnect?: BookWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookWhereUniqueInput], {
    nullable: true
  })
  delete?: BookWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookUpdateWithWhereUniqueWithoutAuthorsInput], {
    nullable: true
  })
  update?: BookUpdateWithWhereUniqueWithoutAuthorsInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookUpdateManyWithWhereWithoutAuthorsInput], {
    nullable: true
  })
  updateMany?: BookUpdateManyWithWhereWithoutAuthorsInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookScalarWhereInput], {
    nullable: true
  })
  deleteMany?: BookScalarWhereInput[] | undefined;
}
