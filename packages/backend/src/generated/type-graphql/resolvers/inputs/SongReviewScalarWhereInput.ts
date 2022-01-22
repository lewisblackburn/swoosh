import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("SongReviewScalarWhereInput", {
  isAbstract: true
})
export class SongReviewScalarWhereInput {
  @TypeGraphQL.Field(_type => [SongReviewScalarWhereInput], {
    nullable: true
  })
  AND?: SongReviewScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongReviewScalarWhereInput], {
    nullable: true
  })
  OR?: SongReviewScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongReviewScalarWhereInput], {
    nullable: true
  })
  NOT?: SongReviewScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  review?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  rating?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  songId?: IntFilter | undefined;
}
