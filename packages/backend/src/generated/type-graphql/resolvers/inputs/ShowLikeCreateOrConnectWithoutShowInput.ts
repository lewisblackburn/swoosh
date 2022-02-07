import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowLikeCreateWithoutShowInput } from "../inputs/ShowLikeCreateWithoutShowInput";
import { ShowLikeWhereUniqueInput } from "../inputs/ShowLikeWhereUniqueInput";

@TypeGraphQL.InputType("ShowLikeCreateOrConnectWithoutShowInput", {
  isAbstract: true
})
export class ShowLikeCreateOrConnectWithoutShowInput {
  @TypeGraphQL.Field(_type => ShowLikeWhereUniqueInput, {
    nullable: false
  })
  where!: ShowLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => ShowLikeCreateWithoutShowInput, {
    nullable: false
  })
  create!: ShowLikeCreateWithoutShowInput;
}
