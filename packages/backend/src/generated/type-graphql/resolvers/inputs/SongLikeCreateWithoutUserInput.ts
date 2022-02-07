import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateNestedOneWithoutLikesInput } from "../inputs/SongCreateNestedOneWithoutLikesInput";

@TypeGraphQL.InputType("SongLikeCreateWithoutUserInput", {
  isAbstract: true
})
export class SongLikeCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => SongCreateNestedOneWithoutLikesInput, {
    nullable: false
  })
  song!: SongCreateNestedOneWithoutLikesInput;
}
