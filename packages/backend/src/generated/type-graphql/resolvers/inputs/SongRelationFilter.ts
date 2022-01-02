import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongWhereInput } from "../inputs/SongWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SongRelationFilter {
  @TypeGraphQL.Field(_type => SongWhereInput, {
    nullable: true
  })
  is?: SongWhereInput | undefined;

  @TypeGraphQL.Field(_type => SongWhereInput, {
    nullable: true
  })
  isNot?: SongWhereInput | undefined;
}
