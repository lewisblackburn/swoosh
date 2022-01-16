import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowUpdateWithoutWatchlistInput } from "../inputs/ShowUpdateWithoutWatchlistInput";
import { ShowWhereUniqueInput } from "../inputs/ShowWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ShowUpdateWithWhereUniqueWithoutWatchlistInput {
  @TypeGraphQL.Field(_type => ShowWhereUniqueInput, {
    nullable: false
  })
  where!: ShowWhereUniqueInput;

  @TypeGraphQL.Field(_type => ShowUpdateWithoutWatchlistInput, {
    nullable: false
  })
  data!: ShowUpdateWithoutWatchlistInput;
}
