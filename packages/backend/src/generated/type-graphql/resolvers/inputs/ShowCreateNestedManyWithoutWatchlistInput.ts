import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowCreateOrConnectWithoutWatchlistInput } from "../inputs/ShowCreateOrConnectWithoutWatchlistInput";
import { ShowCreateWithoutWatchlistInput } from "../inputs/ShowCreateWithoutWatchlistInput";
import { ShowWhereUniqueInput } from "../inputs/ShowWhereUniqueInput";

@TypeGraphQL.InputType("ShowCreateNestedManyWithoutWatchlistInput", {
  isAbstract: true
})
export class ShowCreateNestedManyWithoutWatchlistInput {
  @TypeGraphQL.Field(_type => [ShowCreateWithoutWatchlistInput], {
    nullable: true
  })
  create?: ShowCreateWithoutWatchlistInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowCreateOrConnectWithoutWatchlistInput], {
    nullable: true
  })
  connectOrCreate?: ShowCreateOrConnectWithoutWatchlistInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowWhereUniqueInput], {
    nullable: true
  })
  connect?: ShowWhereUniqueInput[] | undefined;
}
