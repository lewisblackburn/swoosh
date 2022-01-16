import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateOrConnectWithoutGenresInput } from "../inputs/BookCreateOrConnectWithoutGenresInput";
import { BookCreateWithoutGenresInput } from "../inputs/BookCreateWithoutGenresInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BookCreateNestedManyWithoutGenresInput {
  @TypeGraphQL.Field(_type => [BookCreateWithoutGenresInput], {
    nullable: true
  })
  create?: BookCreateWithoutGenresInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookCreateOrConnectWithoutGenresInput], {
    nullable: true
  })
  connectOrCreate?: BookCreateOrConnectWithoutGenresInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookWhereUniqueInput], {
    nullable: true
  })
  connect?: BookWhereUniqueInput[] | undefined;
}
