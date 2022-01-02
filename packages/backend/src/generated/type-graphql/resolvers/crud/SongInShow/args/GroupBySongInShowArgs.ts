import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongInShowOrderByWithAggregationInput } from "../../../inputs/SongInShowOrderByWithAggregationInput";
import { SongInShowScalarWhereWithAggregatesInput } from "../../../inputs/SongInShowScalarWhereWithAggregatesInput";
import { SongInShowWhereInput } from "../../../inputs/SongInShowWhereInput";
import { SongInShowScalarFieldEnum } from "../../../../enums/SongInShowScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySongInShowArgs {
  @TypeGraphQL.Field(_type => SongInShowWhereInput, {
    nullable: true
  })
  where?: SongInShowWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SongInShowOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SongInShowOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongInShowScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"timestamp" | "description" | "songId" | "showId">;

  @TypeGraphQL.Field(_type => SongInShowScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SongInShowScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
