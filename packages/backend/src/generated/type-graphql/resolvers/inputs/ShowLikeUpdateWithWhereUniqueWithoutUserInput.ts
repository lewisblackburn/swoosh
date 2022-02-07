import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowLikeUpdateWithoutUserInput } from "../inputs/ShowLikeUpdateWithoutUserInput";
import { ShowLikeWhereUniqueInput } from "../inputs/ShowLikeWhereUniqueInput";

@TypeGraphQL.InputType("ShowLikeUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class ShowLikeUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => ShowLikeWhereUniqueInput, {
    nullable: false
  })
  where!: ShowLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => ShowLikeUpdateWithoutUserInput, {
    nullable: false
  })
  data!: ShowLikeUpdateWithoutUserInput;
}
