import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { ActorInShow } from "../models/ActorInShow";
import { Favourite } from "../models/Favourite";
import { Genre } from "../models/Genre";
import { Platform } from "../models/Platform";
import { Rating } from "../models/Rating";
import { Review } from "../models/Review";
import { SongInShow } from "../models/SongInShow";
import { Watchlist } from "../models/Watchlist";
import { ShowCount } from "../resolvers/outputs/ShowCount";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Show {
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
  thumbnail!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  locked!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  released?: Date | null;

  rating?: Rating[];

  actors?: ActorInShow[];

  genres?: Genre[];

  platforms?: Platform[];

  soundtrack?: SongInShow[];

  favourite?: Favourite[];

  watchlist?: Watchlist[];

  reviews?: Review[];

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => ShowCount, {
    nullable: true
  })
  _count?: ShowCount | null;
}
