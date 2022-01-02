import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SongInShowScalarWhereInput {
  @TypeGraphQL.Field(_type => [SongInShowScalarWhereInput], {
    nullable: true
  })
  AND?: SongInShowScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongInShowScalarWhereInput], {
    nullable: true
  })
  OR?: SongInShowScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongInShowScalarWhereInput], {
    nullable: true
  })
  NOT?: SongInShowScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  timestamp?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  description?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  songId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  showId?: IntFilter | undefined;
}
