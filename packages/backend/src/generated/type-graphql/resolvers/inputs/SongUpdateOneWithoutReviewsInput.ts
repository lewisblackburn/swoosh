import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateOrConnectWithoutReviewsInput } from "../inputs/SongCreateOrConnectWithoutReviewsInput";
import { SongCreateWithoutReviewsInput } from "../inputs/SongCreateWithoutReviewsInput";
import { SongUpdateWithoutReviewsInput } from "../inputs/SongUpdateWithoutReviewsInput";
import { SongUpsertWithoutReviewsInput } from "../inputs/SongUpsertWithoutReviewsInput";
import { SongWhereUniqueInput } from "../inputs/SongWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SongUpdateOneWithoutReviewsInput {
  @TypeGraphQL.Field(_type => SongCreateWithoutReviewsInput, {
    nullable: true
  })
  create?: SongCreateWithoutReviewsInput | undefined;

  @TypeGraphQL.Field(_type => SongCreateOrConnectWithoutReviewsInput, {
    nullable: true
  })
  connectOrCreate?: SongCreateOrConnectWithoutReviewsInput | undefined;

  @TypeGraphQL.Field(_type => SongUpsertWithoutReviewsInput, {
    nullable: true
  })
  upsert?: SongUpsertWithoutReviewsInput | undefined;

  @TypeGraphQL.Field(_type => SongWhereUniqueInput, {
    nullable: true
  })
  connect?: SongWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => SongUpdateWithoutReviewsInput, {
    nullable: true
  })
  update?: SongUpdateWithoutReviewsInput | undefined;
}
