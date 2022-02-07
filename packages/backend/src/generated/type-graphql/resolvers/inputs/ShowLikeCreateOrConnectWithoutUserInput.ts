import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowLikeCreateWithoutUserInput } from "../inputs/ShowLikeCreateWithoutUserInput";
import { ShowLikeWhereUniqueInput } from "../inputs/ShowLikeWhereUniqueInput";

@TypeGraphQL.InputType("ShowLikeCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class ShowLikeCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => ShowLikeWhereUniqueInput, {
    nullable: false
  })
  where!: ShowLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => ShowLikeCreateWithoutUserInput, {
    nullable: false
  })
  create!: ShowLikeCreateWithoutUserInput;
}
