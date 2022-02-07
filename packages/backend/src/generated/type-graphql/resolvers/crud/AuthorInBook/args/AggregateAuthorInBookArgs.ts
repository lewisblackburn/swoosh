import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AuthorInBookOrderByWithRelationInput } from "../../../inputs/AuthorInBookOrderByWithRelationInput";
import { AuthorInBookWhereInput } from "../../../inputs/AuthorInBookWhereInput";
import { AuthorInBookWhereUniqueInput } from "../../../inputs/AuthorInBookWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateAuthorInBookArgs {
  @TypeGraphQL.Field(_type => AuthorInBookWhereInput, {
    nullable: true
  })
  where?: AuthorInBookWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AuthorInBookOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: AuthorInBookOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => AuthorInBookWhereUniqueInput, {
    nullable: true
  })
  cursor?: AuthorInBookWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
