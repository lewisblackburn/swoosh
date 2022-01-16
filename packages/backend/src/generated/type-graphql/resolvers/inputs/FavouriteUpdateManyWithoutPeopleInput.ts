import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FavouriteCreateOrConnectWithoutPeopleInput } from "../inputs/FavouriteCreateOrConnectWithoutPeopleInput";
import { FavouriteCreateWithoutPeopleInput } from "../inputs/FavouriteCreateWithoutPeopleInput";
import { FavouriteScalarWhereInput } from "../inputs/FavouriteScalarWhereInput";
import { FavouriteUpdateManyWithWhereWithoutPeopleInput } from "../inputs/FavouriteUpdateManyWithWhereWithoutPeopleInput";
import { FavouriteUpdateWithWhereUniqueWithoutPeopleInput } from "../inputs/FavouriteUpdateWithWhereUniqueWithoutPeopleInput";
import { FavouriteUpsertWithWhereUniqueWithoutPeopleInput } from "../inputs/FavouriteUpsertWithWhereUniqueWithoutPeopleInput";
import { FavouriteWhereUniqueInput } from "../inputs/FavouriteWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FavouriteUpdateManyWithoutPeopleInput {
  @TypeGraphQL.Field(_type => [FavouriteCreateWithoutPeopleInput], {
    nullable: true
  })
  create?: FavouriteCreateWithoutPeopleInput[] | undefined;

  @TypeGraphQL.Field(_type => [FavouriteCreateOrConnectWithoutPeopleInput], {
    nullable: true
  })
  connectOrCreate?: FavouriteCreateOrConnectWithoutPeopleInput[] | undefined;

  @TypeGraphQL.Field(_type => [FavouriteUpsertWithWhereUniqueWithoutPeopleInput], {
    nullable: true
  })
  upsert?: FavouriteUpsertWithWhereUniqueWithoutPeopleInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [FavouriteUpdateWithWhereUniqueWithoutPeopleInput], {
    nullable: true
  })
  update?: FavouriteUpdateWithWhereUniqueWithoutPeopleInput[] | undefined;

  @TypeGraphQL.Field(_type => [FavouriteUpdateManyWithWhereWithoutPeopleInput], {
    nullable: true
  })
  updateMany?: FavouriteUpdateManyWithWhereWithoutPeopleInput[] | undefined;

  @TypeGraphQL.Field(_type => [FavouriteScalarWhereInput], {
    nullable: true
  })
  deleteMany?: FavouriteScalarWhereInput[] | undefined;
}
