import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongLikeCreateWithoutUserInput } from "../inputs/SongLikeCreateWithoutUserInput";
import { SongLikeUpdateWithoutUserInput } from "../inputs/SongLikeUpdateWithoutUserInput";
import { SongLikeWhereUniqueInput } from "../inputs/SongLikeWhereUniqueInput";

@TypeGraphQL.InputType("SongLikeUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class SongLikeUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => SongLikeWhereUniqueInput, {
    nullable: false
  })
  where!: SongLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongLikeUpdateWithoutUserInput, {
    nullable: false
  })
  update!: SongLikeUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => SongLikeCreateWithoutUserInput, {
    nullable: false
  })
  create!: SongLikeCreateWithoutUserInput;
}
