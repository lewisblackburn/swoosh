import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowReviewCreateOrConnectWithoutLikesInput } from "../inputs/ShowReviewCreateOrConnectWithoutLikesInput";
import { ShowReviewCreateWithoutLikesInput } from "../inputs/ShowReviewCreateWithoutLikesInput";
import { ShowReviewUpdateWithoutLikesInput } from "../inputs/ShowReviewUpdateWithoutLikesInput";
import { ShowReviewUpsertWithoutLikesInput } from "../inputs/ShowReviewUpsertWithoutLikesInput";
import { ShowReviewWhereUniqueInput } from "../inputs/ShowReviewWhereUniqueInput";

@TypeGraphQL.InputType("ShowReviewUpdateOneRequiredWithoutLikesInput", {
  isAbstract: true
})
export class ShowReviewUpdateOneRequiredWithoutLikesInput {
  @TypeGraphQL.Field(_type => ShowReviewCreateWithoutLikesInput, {
    nullable: true
  })
  create?: ShowReviewCreateWithoutLikesInput | undefined;

  @TypeGraphQL.Field(_type => ShowReviewCreateOrConnectWithoutLikesInput, {
    nullable: true
  })
  connectOrCreate?: ShowReviewCreateOrConnectWithoutLikesInput | undefined;

  @TypeGraphQL.Field(_type => ShowReviewUpsertWithoutLikesInput, {
    nullable: true
  })
  upsert?: ShowReviewUpsertWithoutLikesInput | undefined;

  @TypeGraphQL.Field(_type => ShowReviewWhereUniqueInput, {
    nullable: true
  })
  connect?: ShowReviewWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ShowReviewUpdateWithoutLikesInput, {
    nullable: true
  })
  update?: ShowReviewUpdateWithoutLikesInput | undefined;
}
