import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AuthorInBookOrderByWithAggregationInput } from "../../../inputs/AuthorInBookOrderByWithAggregationInput";
import { AuthorInBookScalarWhereWithAggregatesInput } from "../../../inputs/AuthorInBookScalarWhereWithAggregatesInput";
import { AuthorInBookWhereInput } from "../../../inputs/AuthorInBookWhereInput";
import { AuthorInBookScalarFieldEnum } from "../../../../enums/AuthorInBookScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByAuthorInBookArgs {
  @TypeGraphQL.Field(_type => AuthorInBookWhereInput, {
    nullable: true
  })
  where?: AuthorInBookWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AuthorInBookOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: AuthorInBookOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorInBookScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"bookId" | "personId" | "stagename">;

  @TypeGraphQL.Field(_type => AuthorInBookScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: AuthorInBookScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
