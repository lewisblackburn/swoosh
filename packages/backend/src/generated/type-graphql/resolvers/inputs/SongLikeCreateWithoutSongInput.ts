import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutLikedSongsInput } from "../inputs/UserCreateNestedOneWithoutLikedSongsInput";

@TypeGraphQL.InputType("SongLikeCreateWithoutSongInput", {
  isAbstract: true
})
export class SongLikeCreateWithoutSongInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutLikedSongsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutLikedSongsInput;
}
