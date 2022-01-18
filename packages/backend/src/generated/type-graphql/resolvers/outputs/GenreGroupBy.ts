import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenreAvgAggregate } from "../outputs/GenreAvgAggregate";
import { GenreCountAggregate } from "../outputs/GenreCountAggregate";
import { GenreMaxAggregate } from "../outputs/GenreMaxAggregate";
import { GenreMinAggregate } from "../outputs/GenreMinAggregate";
import { GenreSumAggregate } from "../outputs/GenreSumAggregate";

@TypeGraphQL.ObjectType("GenreGroupBy", {
  isAbstract: true
})
export class GenreGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => GenreCountAggregate, {
    nullable: true
  })
  _count!: GenreCountAggregate | null;

  @TypeGraphQL.Field(_type => GenreAvgAggregate, {
    nullable: true
  })
  _avg!: GenreAvgAggregate | null;

  @TypeGraphQL.Field(_type => GenreSumAggregate, {
    nullable: true
  })
  _sum!: GenreSumAggregate | null;

  @TypeGraphQL.Field(_type => GenreMinAggregate, {
    nullable: true
  })
  _min!: GenreMinAggregate | null;

  @TypeGraphQL.Field(_type => GenreMaxAggregate, {
    nullable: true
  })
  _max!: GenreMaxAggregate | null;
}
