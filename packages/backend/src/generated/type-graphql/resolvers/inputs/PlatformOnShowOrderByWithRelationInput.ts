import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlatformOrderByWithRelationInput } from "../inputs/PlatformOrderByWithRelationInput";
import { ShowOrderByWithRelationInput } from "../inputs/ShowOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PlatformOnShowOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  price?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PlatformOrderByWithRelationInput, {
    nullable: true
  })
  platform?: PlatformOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  platformId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ShowOrderByWithRelationInput, {
    nullable: true
  })
  show?: ShowOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  showId?: "asc" | "desc" | undefined;
}
