import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongReviewLikeScalarWhereInput } from "../inputs/SongReviewLikeScalarWhereInput";
import { SongReviewLikeUpdateManyMutationInput } from "../inputs/SongReviewLikeUpdateManyMutationInput";

@TypeGraphQL.InputType("SongReviewLikeUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true
})
export class SongReviewLikeUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => SongReviewLikeScalarWhereInput, {
    nullable: false
  })
  where!: SongReviewLikeScalarWhereInput;

  @TypeGraphQL.Field(_type => SongReviewLikeUpdateManyMutationInput, {
    nullable: false
  })
  data!: SongReviewLikeUpdateManyMutationInput;
}
