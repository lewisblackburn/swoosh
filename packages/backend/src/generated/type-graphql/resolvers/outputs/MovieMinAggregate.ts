import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("MovieMinAggregate", {
  isAbstract: true
})
export class MovieMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tagline!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  overview!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  poster!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  backdrop!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  locked!: boolean | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  released!: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  runtime!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  trailer!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  rating!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;
}
