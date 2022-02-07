import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongLikeUpdateWithoutUserInput } from "../inputs/SongLikeUpdateWithoutUserInput";
import { SongLikeWhereUniqueInput } from "../inputs/SongLikeWhereUniqueInput";

@TypeGraphQL.InputType("SongLikeUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class SongLikeUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => SongLikeWhereUniqueInput, {
    nullable: false
  })
  where!: SongLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongLikeUpdateWithoutUserInput, {
    nullable: false
  })
  data!: SongLikeUpdateWithoutUserInput;
}
