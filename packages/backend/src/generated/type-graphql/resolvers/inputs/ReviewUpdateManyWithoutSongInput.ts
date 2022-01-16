import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReviewCreateManySongInputEnvelope } from "../inputs/ReviewCreateManySongInputEnvelope";
import { ReviewCreateOrConnectWithoutSongInput } from "../inputs/ReviewCreateOrConnectWithoutSongInput";
import { ReviewCreateWithoutSongInput } from "../inputs/ReviewCreateWithoutSongInput";
import { ReviewScalarWhereInput } from "../inputs/ReviewScalarWhereInput";
import { ReviewUpdateManyWithWhereWithoutSongInput } from "../inputs/ReviewUpdateManyWithWhereWithoutSongInput";
import { ReviewUpdateWithWhereUniqueWithoutSongInput } from "../inputs/ReviewUpdateWithWhereUniqueWithoutSongInput";
import { ReviewUpsertWithWhereUniqueWithoutSongInput } from "../inputs/ReviewUpsertWithWhereUniqueWithoutSongInput";
import { ReviewWhereUniqueInput } from "../inputs/ReviewWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReviewUpdateManyWithoutSongInput {
  @TypeGraphQL.Field(_type => [ReviewCreateWithoutSongInput], {
    nullable: true
  })
  create?: ReviewCreateWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReviewCreateOrConnectWithoutSongInput], {
    nullable: true
  })
  connectOrCreate?: ReviewCreateOrConnectWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReviewUpsertWithWhereUniqueWithoutSongInput], {
    nullable: true
  })
  upsert?: ReviewUpsertWithWhereUniqueWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => ReviewCreateManySongInputEnvelope, {
    nullable: true
  })
  createMany?: ReviewCreateManySongInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ReviewWhereUniqueInput], {
    nullable: true
  })
  connect?: ReviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReviewWhereUniqueInput], {
    nullable: true
  })
  set?: ReviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReviewWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ReviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReviewWhereUniqueInput], {
    nullable: true
  })
  delete?: ReviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReviewUpdateWithWhereUniqueWithoutSongInput], {
    nullable: true
  })
  update?: ReviewUpdateWithWhereUniqueWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReviewUpdateManyWithWhereWithoutSongInput], {
    nullable: true
  })
  updateMany?: ReviewUpdateManyWithWhereWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReviewScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ReviewScalarWhereInput[] | undefined;
}
