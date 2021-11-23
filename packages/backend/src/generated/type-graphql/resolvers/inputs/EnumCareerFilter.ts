import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumCareerFilter } from "../inputs/NestedEnumCareerFilter";
import { Career } from "../../enums/Career";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EnumCareerFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumCareerFilter, {
    nullable: true
  })
  not?: NestedEnumCareerFilter | undefined;
}
