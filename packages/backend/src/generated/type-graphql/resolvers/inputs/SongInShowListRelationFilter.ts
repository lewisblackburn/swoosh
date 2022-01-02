import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongInShowWhereInput } from "../inputs/SongInShowWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SongInShowListRelationFilter {
  @TypeGraphQL.Field(_type => SongInShowWhereInput, {
    nullable: true
  })
  every?: SongInShowWhereInput | undefined;

  @TypeGraphQL.Field(_type => SongInShowWhereInput, {
    nullable: true
  })
  some?: SongInShowWhereInput | undefined;

  @TypeGraphQL.Field(_type => SongInShowWhereInput, {
    nullable: true
  })
  none?: SongInShowWhereInput | undefined;
}
