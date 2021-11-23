import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Career } from "../../enums/Career";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class PersonMaxAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => Career, {
    nullable: true
  })
  type!: "AUTHOR" | "ARTIST" | "ACTOR" | null;
}
