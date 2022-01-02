import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { PlatformOnMovie } from "../models/PlatformOnMovie";
import { PlatformOnShow } from "../models/PlatformOnShow";
import { PlatformCount } from "../resolvers/outputs/PlatformCount";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Platform {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  PlatformOnMovie?: PlatformOnMovie[];

  PlatformOnShow?: PlatformOnShow[];

  @TypeGraphQL.Field(_type => PlatformCount, {
    nullable: true
  })
  _count?: PlatformCount | null;
}
