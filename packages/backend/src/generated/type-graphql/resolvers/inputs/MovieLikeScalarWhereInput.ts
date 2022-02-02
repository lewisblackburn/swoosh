import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("MovieLikeScalarWhereInput", {
  isAbstract: true
})
export class MovieLikeScalarWhereInput {
  @TypeGraphQL.Field(_type => [MovieLikeScalarWhereInput], {
    nullable: true
  })
  AND?: MovieLikeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieLikeScalarWhereInput], {
    nullable: true
  })
  OR?: MovieLikeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieLikeScalarWhereInput], {
    nullable: true
  })
  NOT?: MovieLikeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  movieId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;
}
