import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WatchlistScalarWhereInput } from "../inputs/WatchlistScalarWhereInput";
import { WatchlistUpdateManyMutationInput } from "../inputs/WatchlistUpdateManyMutationInput";

@TypeGraphQL.InputType("WatchlistUpdateManyWithWhereWithoutMoviesInput", {
  isAbstract: true
})
export class WatchlistUpdateManyWithWhereWithoutMoviesInput {
  @TypeGraphQL.Field(_type => WatchlistScalarWhereInput, {
    nullable: false
  })
  where!: WatchlistScalarWhereInput;

  @TypeGraphQL.Field(_type => WatchlistUpdateManyMutationInput, {
    nullable: false
  })
  data!: WatchlistUpdateManyMutationInput;
}
