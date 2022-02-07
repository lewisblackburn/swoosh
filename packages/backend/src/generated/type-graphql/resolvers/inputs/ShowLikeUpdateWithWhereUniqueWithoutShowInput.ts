import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowLikeUpdateWithoutShowInput } from "../inputs/ShowLikeUpdateWithoutShowInput";
import { ShowLikeWhereUniqueInput } from "../inputs/ShowLikeWhereUniqueInput";

@TypeGraphQL.InputType("ShowLikeUpdateWithWhereUniqueWithoutShowInput", {
  isAbstract: true
})
export class ShowLikeUpdateWithWhereUniqueWithoutShowInput {
  @TypeGraphQL.Field(_type => ShowLikeWhereUniqueInput, {
    nullable: false
  })
  where!: ShowLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => ShowLikeUpdateWithoutShowInput, {
    nullable: false
  })
  data!: ShowLikeUpdateWithoutShowInput;
}
