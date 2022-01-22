import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongReviewCreateWithoutUserInput } from "../inputs/SongReviewCreateWithoutUserInput";
import { SongReviewUpdateWithoutUserInput } from "../inputs/SongReviewUpdateWithoutUserInput";
import { SongReviewWhereUniqueInput } from "../inputs/SongReviewWhereUniqueInput";

@TypeGraphQL.InputType("SongReviewUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class SongReviewUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => SongReviewWhereUniqueInput, {
    nullable: false
  })
  where!: SongReviewWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongReviewUpdateWithoutUserInput, {
    nullable: false
  })
  update!: SongReviewUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => SongReviewCreateWithoutUserInput, {
    nullable: false
  })
  create!: SongReviewCreateWithoutUserInput;
}
