import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowCreateOrConnectWithoutRatingInput } from "../inputs/ShowCreateOrConnectWithoutRatingInput";
import { ShowCreateWithoutRatingInput } from "../inputs/ShowCreateWithoutRatingInput";
import { ShowScalarWhereInput } from "../inputs/ShowScalarWhereInput";
import { ShowUpdateManyWithWhereWithoutRatingInput } from "../inputs/ShowUpdateManyWithWhereWithoutRatingInput";
import { ShowUpdateWithWhereUniqueWithoutRatingInput } from "../inputs/ShowUpdateWithWhereUniqueWithoutRatingInput";
import { ShowUpsertWithWhereUniqueWithoutRatingInput } from "../inputs/ShowUpsertWithWhereUniqueWithoutRatingInput";
import { ShowWhereUniqueInput } from "../inputs/ShowWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ShowUpdateManyWithoutRatingInput {
  @TypeGraphQL.Field(_type => [ShowCreateWithoutRatingInput], {
    nullable: true
  })
  create?: ShowCreateWithoutRatingInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowCreateOrConnectWithoutRatingInput], {
    nullable: true
  })
  connectOrCreate?: ShowCreateOrConnectWithoutRatingInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowUpsertWithWhereUniqueWithoutRatingInput], {
    nullable: true
  })
  upsert?: ShowUpsertWithWhereUniqueWithoutRatingInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [ShowUpdateWithWhereUniqueWithoutRatingInput], {
    nullable: true
  })
  update?: ShowUpdateWithWhereUniqueWithoutRatingInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowUpdateManyWithWhereWithoutRatingInput], {
    nullable: true
  })
  updateMany?: ShowUpdateManyWithWhereWithoutRatingInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ShowScalarWhereInput[] | undefined;
}
