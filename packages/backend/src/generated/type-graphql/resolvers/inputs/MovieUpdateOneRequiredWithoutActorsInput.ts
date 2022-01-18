import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateOrConnectWithoutActorsInput } from "../inputs/MovieCreateOrConnectWithoutActorsInput";
import { MovieCreateWithoutActorsInput } from "../inputs/MovieCreateWithoutActorsInput";
import { MovieUpdateWithoutActorsInput } from "../inputs/MovieUpdateWithoutActorsInput";
import { MovieUpsertWithoutActorsInput } from "../inputs/MovieUpsertWithoutActorsInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType("MovieUpdateOneRequiredWithoutActorsInput", {
  isAbstract: true
})
export class MovieUpdateOneRequiredWithoutActorsInput {
  @TypeGraphQL.Field(_type => MovieCreateWithoutActorsInput, {
    nullable: true
  })
  create?: MovieCreateWithoutActorsInput | undefined;

  @TypeGraphQL.Field(_type => MovieCreateOrConnectWithoutActorsInput, {
    nullable: true
  })
  connectOrCreate?: MovieCreateOrConnectWithoutActorsInput | undefined;

  @TypeGraphQL.Field(_type => MovieUpsertWithoutActorsInput, {
    nullable: true
  })
  upsert?: MovieUpsertWithoutActorsInput | undefined;

  @TypeGraphQL.Field(_type => MovieWhereUniqueInput, {
    nullable: true
  })
  connect?: MovieWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MovieUpdateWithoutActorsInput, {
    nullable: true
  })
  update?: MovieUpdateWithoutActorsInput | undefined;
}
