import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("SongLikeScalarWhereInput", {
  isAbstract: true
})
export class SongLikeScalarWhereInput {
  @TypeGraphQL.Field(_type => [SongLikeScalarWhereInput], {
    nullable: true
  })
  AND?: SongLikeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongLikeScalarWhereInput], {
    nullable: true
  })
  OR?: SongLikeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongLikeScalarWhereInput], {
    nullable: true
  })
  NOT?: SongLikeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  songId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;
}
