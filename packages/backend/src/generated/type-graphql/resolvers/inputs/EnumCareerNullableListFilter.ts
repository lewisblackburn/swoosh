import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Career } from "../../enums/Career";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EnumCareerNullableListFilter {
  @TypeGraphQL.Field(_type => [Career], {
    nullable: true
  })
  equals?: Array<"AUTHOR" | "ARTIST" | "ACTOR"> | undefined;

  @TypeGraphQL.Field(_type => Career, {
    nullable: true
  })
  has?: "AUTHOR" | "ARTIST" | "ACTOR" | undefined;

  @TypeGraphQL.Field(_type => [Career], {
    nullable: true
  })
  hasEvery?: Array<"AUTHOR" | "ARTIST" | "ACTOR"> | undefined;

  @TypeGraphQL.Field(_type => [Career], {
    nullable: true
  })
  hasSome?: Array<"AUTHOR" | "ARTIST" | "ACTOR"> | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isEmpty?: boolean | undefined;
}
