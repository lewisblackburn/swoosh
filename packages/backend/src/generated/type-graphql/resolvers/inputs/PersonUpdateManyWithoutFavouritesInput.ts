import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateOrConnectWithoutFavouritesInput } from "../inputs/PersonCreateOrConnectWithoutFavouritesInput";
import { PersonCreateWithoutFavouritesInput } from "../inputs/PersonCreateWithoutFavouritesInput";
import { PersonScalarWhereInput } from "../inputs/PersonScalarWhereInput";
import { PersonUpdateManyWithWhereWithoutFavouritesInput } from "../inputs/PersonUpdateManyWithWhereWithoutFavouritesInput";
import { PersonUpdateWithWhereUniqueWithoutFavouritesInput } from "../inputs/PersonUpdateWithWhereUniqueWithoutFavouritesInput";
import { PersonUpsertWithWhereUniqueWithoutFavouritesInput } from "../inputs/PersonUpsertWithWhereUniqueWithoutFavouritesInput";
import { PersonWhereUniqueInput } from "../inputs/PersonWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PersonUpdateManyWithoutFavouritesInput {
  @TypeGraphQL.Field(_type => [PersonCreateWithoutFavouritesInput], {
    nullable: true
  })
  create?: PersonCreateWithoutFavouritesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonCreateOrConnectWithoutFavouritesInput], {
    nullable: true
  })
  connectOrCreate?: PersonCreateOrConnectWithoutFavouritesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonUpsertWithWhereUniqueWithoutFavouritesInput], {
    nullable: true
  })
  upsert?: PersonUpsertWithWhereUniqueWithoutFavouritesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonWhereUniqueInput], {
    nullable: true
  })
  connect?: PersonWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonWhereUniqueInput], {
    nullable: true
  })
  set?: PersonWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PersonWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonWhereUniqueInput], {
    nullable: true
  })
  delete?: PersonWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonUpdateWithWhereUniqueWithoutFavouritesInput], {
    nullable: true
  })
  update?: PersonUpdateWithWhereUniqueWithoutFavouritesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonUpdateManyWithWhereWithoutFavouritesInput], {
    nullable: true
  })
  updateMany?: PersonUpdateManyWithWhereWithoutFavouritesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PersonScalarWhereInput[] | undefined;
}
