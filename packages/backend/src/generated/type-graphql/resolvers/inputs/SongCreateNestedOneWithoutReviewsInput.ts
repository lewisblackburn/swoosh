import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateOrConnectWithoutReviewsInput } from "../inputs/SongCreateOrConnectWithoutReviewsInput";
import { SongCreateWithoutReviewsInput } from "../inputs/SongCreateWithoutReviewsInput";
import { SongWhereUniqueInput } from "../inputs/SongWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SongCreateNestedOneWithoutReviewsInput {
  @TypeGraphQL.Field(_type => SongCreateWithoutReviewsInput, {
    nullable: true
  })
  create?: SongCreateWithoutReviewsInput | undefined;

  @TypeGraphQL.Field(_type => SongCreateOrConnectWithoutReviewsInput, {
    nullable: true
  })
  connectOrCreate?: SongCreateOrConnectWithoutReviewsInput | undefined;

  @TypeGraphQL.Field(_type => SongWhereUniqueInput, {
    nullable: true
  })
  connect?: SongWhereUniqueInput | undefined;
}
