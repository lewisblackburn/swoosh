import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Movie } from "../models/Movie";
import { Platform } from "../models/Platform";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class PlatformOnMovie {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  price!: string;

  platform?: Platform;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  platformId!: number;

  movie?: Movie;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  movieId!: number;
}
