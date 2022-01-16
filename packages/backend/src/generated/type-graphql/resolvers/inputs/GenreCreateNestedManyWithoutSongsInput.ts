import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenreCreateOrConnectWithoutSongsInput } from "../inputs/GenreCreateOrConnectWithoutSongsInput";
import { GenreCreateWithoutSongsInput } from "../inputs/GenreCreateWithoutSongsInput";
import { GenreWhereUniqueInput } from "../inputs/GenreWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class GenreCreateNestedManyWithoutSongsInput {
  @TypeGraphQL.Field(_type => [GenreCreateWithoutSongsInput], {
    nullable: true
  })
  create?: GenreCreateWithoutSongsInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenreCreateOrConnectWithoutSongsInput], {
    nullable: true
  })
  connectOrCreate?: GenreCreateOrConnectWithoutSongsInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenreWhereUniqueInput], {
    nullable: true
  })
  connect?: GenreWhereUniqueInput[] | undefined;
}
