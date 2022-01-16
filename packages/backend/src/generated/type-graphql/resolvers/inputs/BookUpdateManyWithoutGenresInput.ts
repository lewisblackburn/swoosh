import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateOrConnectWithoutGenresInput } from "../inputs/BookCreateOrConnectWithoutGenresInput";
import { BookCreateWithoutGenresInput } from "../inputs/BookCreateWithoutGenresInput";
import { BookScalarWhereInput } from "../inputs/BookScalarWhereInput";
import { BookUpdateManyWithWhereWithoutGenresInput } from "../inputs/BookUpdateManyWithWhereWithoutGenresInput";
import { BookUpdateWithWhereUniqueWithoutGenresInput } from "../inputs/BookUpdateWithWhereUniqueWithoutGenresInput";
import { BookUpsertWithWhereUniqueWithoutGenresInput } from "../inputs/BookUpsertWithWhereUniqueWithoutGenresInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BookUpdateManyWithoutGenresInput {
  @TypeGraphQL.Field(_type => [BookCreateWithoutGenresInput], {
    nullable: true
  })
  create?: BookCreateWithoutGenresInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookCreateOrConnectWithoutGenresInput], {
    nullable: true
  })
  connectOrCreate?: BookCreateOrConnectWithoutGenresInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookUpsertWithWhereUniqueWithoutGenresInput], {
    nullable: true
  })
  upsert?: BookUpsertWithWhereUniqueWithoutGenresInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [BookUpdateWithWhereUniqueWithoutGenresInput], {
    nullable: true
  })
  update?: BookUpdateWithWhereUniqueWithoutGenresInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookUpdateManyWithWhereWithoutGenresInput], {
    nullable: true
  })
  updateMany?: BookUpdateManyWithWhereWithoutGenresInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookScalarWhereInput], {
    nullable: true
  })
  deleteMany?: BookScalarWhereInput[] | undefined;
}
