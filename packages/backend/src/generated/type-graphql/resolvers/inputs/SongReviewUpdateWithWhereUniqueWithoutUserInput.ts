import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongReviewUpdateWithoutUserInput } from "../inputs/SongReviewUpdateWithoutUserInput";
import { SongReviewWhereUniqueInput } from "../inputs/SongReviewWhereUniqueInput";

@TypeGraphQL.InputType("SongReviewUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class SongReviewUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => SongReviewWhereUniqueInput, {
    nullable: false
  })
  where!: SongReviewWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongReviewUpdateWithoutUserInput, {
    nullable: false
  })
  data!: SongReviewUpdateWithoutUserInput;
}
