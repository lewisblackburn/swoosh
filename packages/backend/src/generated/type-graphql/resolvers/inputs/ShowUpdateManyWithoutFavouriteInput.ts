import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowCreateOrConnectWithoutFavouriteInput } from "../inputs/ShowCreateOrConnectWithoutFavouriteInput";
import { ShowCreateWithoutFavouriteInput } from "../inputs/ShowCreateWithoutFavouriteInput";
import { ShowScalarWhereInput } from "../inputs/ShowScalarWhereInput";
import { ShowUpdateManyWithWhereWithoutFavouriteInput } from "../inputs/ShowUpdateManyWithWhereWithoutFavouriteInput";
import { ShowUpdateWithWhereUniqueWithoutFavouriteInput } from "../inputs/ShowUpdateWithWhereUniqueWithoutFavouriteInput";
import { ShowUpsertWithWhereUniqueWithoutFavouriteInput } from "../inputs/ShowUpsertWithWhereUniqueWithoutFavouriteInput";
import { ShowWhereUniqueInput } from "../inputs/ShowWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ShowUpdateManyWithoutFavouriteInput {
  @TypeGraphQL.Field(_type => [ShowCreateWithoutFavouriteInput], {
    nullable: true
  })
  create?: ShowCreateWithoutFavouriteInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowCreateOrConnectWithoutFavouriteInput], {
    nullable: true
  })
  connectOrCreate?: ShowCreateOrConnectWithoutFavouriteInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowUpsertWithWhereUniqueWithoutFavouriteInput], {
    nullable: true
  })
  upsert?: ShowUpsertWithWhereUniqueWithoutFavouriteInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowWhereUniqueInput], {
    nullable: true
  })
  connect?: ShowWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowWhereUniqueInput], {
    nullable: true
  })
  set?: ShowWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ShowWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowWhereUniqueInput], {
    nullable: true
  })
  delete?: ShowWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowUpdateWithWhereUniqueWithoutFavouriteInput], {
    nullable: true
  })
  update?: ShowUpdateWithWhereUniqueWithoutFavouriteInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowUpdateManyWithWhereWithoutFavouriteInput], {
    nullable: true
  })
  updateMany?: ShowUpdateManyWithWhereWithoutFavouriteInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ShowScalarWhereInput[] | undefined;
}
