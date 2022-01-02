import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActorInShowOrderByWithAggregationInput } from "../../../inputs/ActorInShowOrderByWithAggregationInput";
import { ActorInShowScalarWhereWithAggregatesInput } from "../../../inputs/ActorInShowScalarWhereWithAggregatesInput";
import { ActorInShowWhereInput } from "../../../inputs/ActorInShowWhereInput";
import { ActorInShowScalarFieldEnum } from "../../../../enums/ActorInShowScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByActorInShowArgs {
  @TypeGraphQL.Field(_type => ActorInShowWhereInput, {
    nullable: true
  })
  where?: ActorInShowWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ActorInShowOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ActorInShowOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActorInShowScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"showId" | "personId" | "role">;

  @TypeGraphQL.Field(_type => ActorInShowScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ActorInShowScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
