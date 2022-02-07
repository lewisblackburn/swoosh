import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateWithoutLikesInput } from "../inputs/SongCreateWithoutLikesInput";
import { SongUpdateWithoutLikesInput } from "../inputs/SongUpdateWithoutLikesInput";

@TypeGraphQL.InputType("SongUpsertWithoutLikesInput", {
  isAbstract: true
})
export class SongUpsertWithoutLikesInput {
  @TypeGraphQL.Field(_type => SongUpdateWithoutLikesInput, {
    nullable: false
  })
  update!: SongUpdateWithoutLikesInput;

  @TypeGraphQL.Field(_type => SongCreateWithoutLikesInput, {
    nullable: false
  })
  create!: SongCreateWithoutLikesInput;
}
