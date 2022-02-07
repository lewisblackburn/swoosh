import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowLikeCreateWithoutUserInput } from "../inputs/ShowLikeCreateWithoutUserInput";
import { ShowLikeUpdateWithoutUserInput } from "../inputs/ShowLikeUpdateWithoutUserInput";
import { ShowLikeWhereUniqueInput } from "../inputs/ShowLikeWhereUniqueInput";

@TypeGraphQL.InputType("ShowLikeUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class ShowLikeUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => ShowLikeWhereUniqueInput, {
    nullable: false
  })
  where!: ShowLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => ShowLikeUpdateWithoutUserInput, {
    nullable: false
  })
  update!: ShowLikeUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => ShowLikeCreateWithoutUserInput, {
    nullable: false
  })
  create!: ShowLikeCreateWithoutUserInput;
}
