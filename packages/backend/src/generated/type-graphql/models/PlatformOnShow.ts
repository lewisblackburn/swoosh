import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Platform } from "../models/Platform";
import { Show } from "../models/Show";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class PlatformOnShow {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  price!: string;

  platform?: Platform;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  platformId!: number;

  show?: Show;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  showId!: number;
}
