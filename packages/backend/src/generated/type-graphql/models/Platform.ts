import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Movie } from "../models/Movie";
import { Show } from "../models/Show";
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

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  apiKey!: string;

  shows?: Show[];

  movies?: Movie[];

  @TypeGraphQL.Field(_type => PlatformCount, {
    nullable: true
  })
  _count?: PlatformCount | null;
}
