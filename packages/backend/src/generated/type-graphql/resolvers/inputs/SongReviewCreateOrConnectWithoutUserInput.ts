import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongReviewCreateWithoutUserInput } from "../inputs/SongReviewCreateWithoutUserInput";
import { SongReviewWhereUniqueInput } from "../inputs/SongReviewWhereUniqueInput";

@TypeGraphQL.InputType("SongReviewCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class SongReviewCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => SongReviewWhereUniqueInput, {
    nullable: false
  })
  where!: SongReviewWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongReviewCreateWithoutUserInput, {
    nullable: false
  })
  create!: SongReviewCreateWithoutUserInput;
}
