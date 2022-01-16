import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenreCreateOrConnectWithoutBooksInput } from "../inputs/GenreCreateOrConnectWithoutBooksInput";
import { GenreCreateWithoutBooksInput } from "../inputs/GenreCreateWithoutBooksInput";
import { GenreWhereUniqueInput } from "../inputs/GenreWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class GenreCreateNestedManyWithoutBooksInput {
  @TypeGraphQL.Field(_type => [GenreCreateWithoutBooksInput], {
    nullable: true
  })
  create?: GenreCreateWithoutBooksInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenreCreateOrConnectWithoutBooksInput], {
    nullable: true
  })
  connectOrCreate?: GenreCreateOrConnectWithoutBooksInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenreWhereUniqueInput], {
    nullable: true
  })
  connect?: GenreWhereUniqueInput[] | undefined;
}
