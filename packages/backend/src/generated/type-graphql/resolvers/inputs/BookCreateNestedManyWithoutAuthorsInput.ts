import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateOrConnectWithoutAuthorsInput } from "../inputs/BookCreateOrConnectWithoutAuthorsInput";
import { BookCreateWithoutAuthorsInput } from "../inputs/BookCreateWithoutAuthorsInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BookCreateNestedManyWithoutAuthorsInput {
  @TypeGraphQL.Field(_type => [BookCreateWithoutAuthorsInput], {
    nullable: true
  })
  create?: BookCreateWithoutAuthorsInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookCreateOrConnectWithoutAuthorsInput], {
    nullable: true
  })
  connectOrCreate?: BookCreateOrConnectWithoutAuthorsInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookWhereUniqueInput], {
    nullable: true
  })
  connect?: BookWhereUniqueInput[] | undefined;
}
