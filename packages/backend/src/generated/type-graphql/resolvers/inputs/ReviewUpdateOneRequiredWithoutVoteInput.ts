import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReviewCreateOrConnectWithoutVoteInput } from "../inputs/ReviewCreateOrConnectWithoutVoteInput";
import { ReviewCreateWithoutVoteInput } from "../inputs/ReviewCreateWithoutVoteInput";
import { ReviewUpdateWithoutVoteInput } from "../inputs/ReviewUpdateWithoutVoteInput";
import { ReviewUpsertWithoutVoteInput } from "../inputs/ReviewUpsertWithoutVoteInput";
import { ReviewWhereUniqueInput } from "../inputs/ReviewWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReviewUpdateOneRequiredWithoutVoteInput {
  @TypeGraphQL.Field(_type => ReviewCreateWithoutVoteInput, {
    nullable: true
  })
  create?: ReviewCreateWithoutVoteInput | undefined;

  @TypeGraphQL.Field(_type => ReviewCreateOrConnectWithoutVoteInput, {
    nullable: true
  })
  connectOrCreate?: ReviewCreateOrConnectWithoutVoteInput | undefined;

  @TypeGraphQL.Field(_type => ReviewUpsertWithoutVoteInput, {
    nullable: true
  })
  upsert?: ReviewUpsertWithoutVoteInput | undefined;

  @TypeGraphQL.Field(_type => ReviewWhereUniqueInput, {
    nullable: true
  })
  connect?: ReviewWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ReviewUpdateWithoutVoteInput, {
    nullable: true
  })
  update?: ReviewUpdateWithoutVoteInput | undefined;
}
