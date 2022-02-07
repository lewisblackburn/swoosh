import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateNestedOneWithoutLikesInput } from "../inputs/SongCreateNestedOneWithoutLikesInput";
import { UserCreateNestedOneWithoutLikedSongsInput } from "../inputs/UserCreateNestedOneWithoutLikedSongsInput";

@TypeGraphQL.InputType("SongLikeCreateInput", {
  isAbstract: true
})
export class SongLikeCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutLikedSongsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutLikedSongsInput;

  @TypeGraphQL.Field(_type => SongCreateNestedOneWithoutLikesInput, {
    nullable: false
  })
  song!: SongCreateNestedOneWithoutLikesInput;
}
