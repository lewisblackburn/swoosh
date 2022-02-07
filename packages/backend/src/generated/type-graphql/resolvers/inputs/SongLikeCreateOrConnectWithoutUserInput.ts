import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongLikeCreateWithoutUserInput } from "../inputs/SongLikeCreateWithoutUserInput";
import { SongLikeWhereUniqueInput } from "../inputs/SongLikeWhereUniqueInput";

@TypeGraphQL.InputType("SongLikeCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class SongLikeCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => SongLikeWhereUniqueInput, {
    nullable: false
  })
  where!: SongLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongLikeCreateWithoutUserInput, {
    nullable: false
  })
  create!: SongLikeCreateWithoutUserInput;
}
