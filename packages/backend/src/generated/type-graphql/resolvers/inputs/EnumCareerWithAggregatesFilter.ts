import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumCareerFilter } from "../inputs/NestedEnumCareerFilter";
import { NestedEnumCareerWithAggregatesFilter } from "../inputs/NestedEnumCareerWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { Career } from "../../enums/Career";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EnumCareerWithAggregatesFilter {
  @TypeGraphQL.Field(_type => Career, {
    nullable: true
  })
  equals?: "AUTHOR" | "ARTIST" | "ACTOR" | undefined;

  @TypeGraphQL.Field(_type => [Career], {
    nullable: true
  })
  in?: Array<"AUTHOR" | "ARTIST" | "ACTOR"> | undefined;

  @TypeGraphQL.Field(_type => [Career], {
    nullable: true
  })
  notIn?: Array<"AUTHOR" | "ARTIST" | "ACTOR"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumCareerWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumCareerWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumCareerFilter, {
    nullable: true
  })
  _min?: NestedEnumCareerFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumCareerFilter, {
    nullable: true
  })
  _max?: NestedEnumCareerFilter | undefined;
}
