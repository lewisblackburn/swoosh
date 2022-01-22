import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongReviewScalarWhereInput } from "../inputs/SongReviewScalarWhereInput";
import { SongReviewUpdateManyMutationInput } from "../inputs/SongReviewUpdateManyMutationInput";

@TypeGraphQL.InputType("SongReviewUpdateManyWithWhereWithoutSongInput", {
  isAbstract: true
})
export class SongReviewUpdateManyWithWhereWithoutSongInput {
  @TypeGraphQL.Field(_type => SongReviewScalarWhereInput, {
    nullable: false
  })
  where!: SongReviewScalarWhereInput;

  @TypeGraphQL.Field(_type => SongReviewUpdateManyMutationInput, {
    nullable: false
  })
  data!: SongReviewUpdateManyMutationInput;
}
