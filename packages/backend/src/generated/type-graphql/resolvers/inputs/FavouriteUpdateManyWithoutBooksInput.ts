import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FavouriteCreateOrConnectWithoutBooksInput } from "../inputs/FavouriteCreateOrConnectWithoutBooksInput";
import { FavouriteCreateWithoutBooksInput } from "../inputs/FavouriteCreateWithoutBooksInput";
import { FavouriteScalarWhereInput } from "../inputs/FavouriteScalarWhereInput";
import { FavouriteUpdateManyWithWhereWithoutBooksInput } from "../inputs/FavouriteUpdateManyWithWhereWithoutBooksInput";
import { FavouriteUpdateWithWhereUniqueWithoutBooksInput } from "../inputs/FavouriteUpdateWithWhereUniqueWithoutBooksInput";
import { FavouriteUpsertWithWhereUniqueWithoutBooksInput } from "../inputs/FavouriteUpsertWithWhereUniqueWithoutBooksInput";
import { FavouriteWhereUniqueInput } from "../inputs/FavouriteWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FavouriteUpdateManyWithoutBooksInput {
  @TypeGraphQL.Field(_type => [FavouriteCreateWithoutBooksInput], {
    nullable: true
  })
  create?: FavouriteCreateWithoutBooksInput[] | undefined;

  @TypeGraphQL.Field(_type => [FavouriteCreateOrConnectWithoutBooksInput], {
    nullable: true
  })
  connectOrCreate?: FavouriteCreateOrConnectWithoutBooksInput[] | undefined;

  @TypeGraphQL.Field(_type => [FavouriteUpsertWithWhereUniqueWithoutBooksInput], {
    nullable: true
  })
  upsert?: FavouriteUpsertWithWhereUniqueWithoutBooksInput[] | undefined;

  @TypeGraphQL.Field(_type => [FavouriteWhereUniqueInput], {
    nullable: true
  })
  connect?: FavouriteWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FavouriteWhereUniqueInput], {
    nullable: true
  })
  set?: FavouriteWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FavouriteWhereUniqueInput], {
    nullable: true
  })
  disconnect?: FavouriteWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FavouriteWhereUniqueInput], {
    nullable: true
  })
  delete?: FavouriteWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FavouriteUpdateWithWhereUniqueWithoutBooksInput], {
    nullable: true
  })
  update?: FavouriteUpdateWithWhereUniqueWithoutBooksInput[] | undefined;

  @TypeGraphQL.Field(_type => [FavouriteUpdateManyWithWhereWithoutBooksInput], {
    nullable: true
  })
  updateMany?: FavouriteUpdateManyWithWhereWithoutBooksInput[] | undefined;

  @TypeGraphQL.Field(_type => [FavouriteScalarWhereInput], {
    nullable: true
  })
  deleteMany?: FavouriteScalarWhereInput[] | undefined;
}
