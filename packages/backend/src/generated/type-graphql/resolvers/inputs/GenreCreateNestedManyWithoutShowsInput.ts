import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenreCreateOrConnectWithoutShowsInput } from "../inputs/GenreCreateOrConnectWithoutShowsInput";
import { GenreCreateWithoutShowsInput } from "../inputs/GenreCreateWithoutShowsInput";
import { GenreWhereUniqueInput } from "../inputs/GenreWhereUniqueInput";

@TypeGraphQL.InputType("GenreCreateNestedManyWithoutShowsInput", {
  isAbstract: true
})
export class GenreCreateNestedManyWithoutShowsInput {
  @TypeGraphQL.Field(_type => [GenreCreateWithoutShowsInput], {
    nullable: true
  })
  create?: GenreCreateWithoutShowsInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenreCreateOrConnectWithoutShowsInput], {
    nullable: true
  })
  connectOrCreate?: GenreCreateOrConnectWithoutShowsInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenreWhereUniqueInput], {
    nullable: true
  })
  connect?: GenreWhereUniqueInput[] | undefined;
}
