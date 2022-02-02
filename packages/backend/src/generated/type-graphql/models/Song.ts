import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Genre } from "../models/Genre";
import { Person } from "../models/Person";
import { SongInMovie } from "../models/SongInMovie";
import { SongInShow } from "../models/SongInShow";
import { SongReview } from "../models/SongReview";
import { SongCount } from "../resolvers/outputs/SongCount";

@TypeGraphQL.ObjectType("Song", {
  isAbstract: true
})
export class Song {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  poster!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  locked!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  released?: Date | null;

  artists?: Person[];

  songInShow?: SongInShow[];

  songInMovie?: SongInMovie[];

  genres?: Genre[];

  reviews?: SongReview[];

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => SongCount, {
    nullable: true
  })
  _count?: SongCount | null;
}
