import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowCreateWithoutWatchlistInput } from "../inputs/ShowCreateWithoutWatchlistInput";
import { ShowUpdateWithoutWatchlistInput } from "../inputs/ShowUpdateWithoutWatchlistInput";
import { ShowWhereUniqueInput } from "../inputs/ShowWhereUniqueInput";

@TypeGraphQL.InputType("ShowUpsertWithWhereUniqueWithoutWatchlistInput", {
  isAbstract: true
})
export class ShowUpsertWithWhereUniqueWithoutWatchlistInput {
  @TypeGraphQL.Field(_type => ShowWhereUniqueInput, {
    nullable: false
  })
  where!: ShowWhereUniqueInput;

  @TypeGraphQL.Field(_type => ShowUpdateWithoutWatchlistInput, {
    nullable: false
  })
  update!: ShowUpdateWithoutWatchlistInput;

  @TypeGraphQL.Field(_type => ShowCreateWithoutWatchlistInput, {
    nullable: false
  })
  create!: ShowCreateWithoutWatchlistInput;
}
