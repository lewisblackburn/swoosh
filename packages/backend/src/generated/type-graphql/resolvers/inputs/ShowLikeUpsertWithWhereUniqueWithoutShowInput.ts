import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowLikeCreateWithoutShowInput } from "../inputs/ShowLikeCreateWithoutShowInput";
import { ShowLikeUpdateWithoutShowInput } from "../inputs/ShowLikeUpdateWithoutShowInput";
import { ShowLikeWhereUniqueInput } from "../inputs/ShowLikeWhereUniqueInput";

@TypeGraphQL.InputType("ShowLikeUpsertWithWhereUniqueWithoutShowInput", {
  isAbstract: true
})
export class ShowLikeUpsertWithWhereUniqueWithoutShowInput {
  @TypeGraphQL.Field(_type => ShowLikeWhereUniqueInput, {
    nullable: false
  })
  where!: ShowLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => ShowLikeUpdateWithoutShowInput, {
    nullable: false
  })
  update!: ShowLikeUpdateWithoutShowInput;

  @TypeGraphQL.Field(_type => ShowLikeCreateWithoutShowInput, {
    nullable: false
  })
  create!: ShowLikeCreateWithoutShowInput;
}
