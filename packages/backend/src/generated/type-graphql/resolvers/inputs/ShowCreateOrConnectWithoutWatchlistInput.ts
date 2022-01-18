import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowCreateWithoutWatchlistInput } from "../inputs/ShowCreateWithoutWatchlistInput";
import { ShowWhereUniqueInput } from "../inputs/ShowWhereUniqueInput";

@TypeGraphQL.InputType("ShowCreateOrConnectWithoutWatchlistInput", {
  isAbstract: true
})
export class ShowCreateOrConnectWithoutWatchlistInput {
  @TypeGraphQL.Field(_type => ShowWhereUniqueInput, {
    nullable: false
  })
  where!: ShowWhereUniqueInput;

  @TypeGraphQL.Field(_type => ShowCreateWithoutWatchlistInput, {
    nullable: false
  })
  create!: ShowCreateWithoutWatchlistInput;
}
