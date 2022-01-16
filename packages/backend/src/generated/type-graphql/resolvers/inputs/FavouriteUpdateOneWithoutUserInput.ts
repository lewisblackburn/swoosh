import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FavouriteCreateOrConnectWithoutUserInput } from "../inputs/FavouriteCreateOrConnectWithoutUserInput";
import { FavouriteCreateWithoutUserInput } from "../inputs/FavouriteCreateWithoutUserInput";
import { FavouriteUpdateWithoutUserInput } from "../inputs/FavouriteUpdateWithoutUserInput";
import { FavouriteUpsertWithoutUserInput } from "../inputs/FavouriteUpsertWithoutUserInput";
import { FavouriteWhereUniqueInput } from "../inputs/FavouriteWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FavouriteUpdateOneWithoutUserInput {
  @TypeGraphQL.Field(_type => FavouriteCreateWithoutUserInput, {
    nullable: true
  })
  create?: FavouriteCreateWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => FavouriteCreateOrConnectWithoutUserInput, {
    nullable: true
  })
  connectOrCreate?: FavouriteCreateOrConnectWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => FavouriteUpsertWithoutUserInput, {
    nullable: true
  })
  upsert?: FavouriteUpsertWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => FavouriteWhereUniqueInput, {
    nullable: true
  })
  connect?: FavouriteWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => FavouriteUpdateWithoutUserInput, {
    nullable: true
  })
  update?: FavouriteUpdateWithoutUserInput | undefined;
}
