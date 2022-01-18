import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowCreateOrConnectWithoutGenresInput } from "../inputs/ShowCreateOrConnectWithoutGenresInput";
import { ShowCreateWithoutGenresInput } from "../inputs/ShowCreateWithoutGenresInput";
import { ShowWhereUniqueInput } from "../inputs/ShowWhereUniqueInput";

@TypeGraphQL.InputType("ShowCreateNestedManyWithoutGenresInput", {
  isAbstract: true
})
export class ShowCreateNestedManyWithoutGenresInput {
  @TypeGraphQL.Field(_type => [ShowCreateWithoutGenresInput], {
    nullable: true
  })
  create?: ShowCreateWithoutGenresInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowCreateOrConnectWithoutGenresInput], {
    nullable: true
  })
  connectOrCreate?: ShowCreateOrConnectWithoutGenresInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowWhereUniqueInput], {
    nullable: true
  })
  connect?: ShowWhereUniqueInput[] | undefined;
}
