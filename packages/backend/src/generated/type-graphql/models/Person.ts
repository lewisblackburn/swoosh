import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { ActorInMovie } from "../models/ActorInMovie";
import { ActorInShow } from "../models/ActorInShow";
import { ArtistInSong } from "../models/ArtistInSong";
import { AuthorInBook } from "../models/AuthorInBook";
import { Career } from "../enums/Career";
import { PersonCount } from "../resolvers/outputs/PersonCount";

@TypeGraphQL.ObjectType("Person", {
  isAbstract: true
})
export class Person {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => [Career], {
    nullable: false
  })
  career!: Array<"AUTHOR" | "ARTIST" | "ACTOR">;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  poster!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  locked!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  bio?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  age?: number | null;

  movies?: ActorInMovie[];

  shows?: ActorInShow[];

  books?: AuthorInBook[];

  songs?: ArtistInSong[];

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => PersonCount, {
    nullable: true
  })
  _count?: PersonCount | null;
}
