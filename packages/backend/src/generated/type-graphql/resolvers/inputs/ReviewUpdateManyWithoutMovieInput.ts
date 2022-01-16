import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReviewCreateManyMovieInputEnvelope } from "../inputs/ReviewCreateManyMovieInputEnvelope";
import { ReviewCreateOrConnectWithoutMovieInput } from "../inputs/ReviewCreateOrConnectWithoutMovieInput";
import { ReviewCreateWithoutMovieInput } from "../inputs/ReviewCreateWithoutMovieInput";
import { ReviewScalarWhereInput } from "../inputs/ReviewScalarWhereInput";
import { ReviewUpdateManyWithWhereWithoutMovieInput } from "../inputs/ReviewUpdateManyWithWhereWithoutMovieInput";
import { ReviewUpdateWithWhereUniqueWithoutMovieInput } from "../inputs/ReviewUpdateWithWhereUniqueWithoutMovieInput";
import { ReviewUpsertWithWhereUniqueWithoutMovieInput } from "../inputs/ReviewUpsertWithWhereUniqueWithoutMovieInput";
import { ReviewWhereUniqueInput } from "../inputs/ReviewWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReviewUpdateManyWithoutMovieInput {
  @TypeGraphQL.Field(_type => [ReviewCreateWithoutMovieInput], {
    nullable: true
  })
  create?: ReviewCreateWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReviewCreateOrConnectWithoutMovieInput], {
    nullable: true
  })
  connectOrCreate?: ReviewCreateOrConnectWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReviewUpsertWithWhereUniqueWithoutMovieInput], {
    nullable: true
  })
  upsert?: ReviewUpsertWithWhereUniqueWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => ReviewCreateManyMovieInputEnvelope, {
    nullable: true
  })
  createMany?: ReviewCreateManyMovieInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ReviewUpdateWithWhereUniqueWithoutMovieInput], {
    nullable: true
  })
  update?: ReviewUpdateWithWhereUniqueWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReviewUpdateManyWithWhereWithoutMovieInput], {
    nullable: true
  })
  updateMany?: ReviewUpdateManyWithWhereWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReviewScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ReviewScalarWhereInput[] | undefined;
}
