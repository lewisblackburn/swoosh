import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowCreateNestedOneWithoutLikesInput } from "../inputs/ShowCreateNestedOneWithoutLikesInput";

@TypeGraphQL.InputType("ShowLikeCreateWithoutUserInput", {
  isAbstract: true
})
export class ShowLikeCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => ShowCreateNestedOneWithoutLikesInput, {
    nullable: false
  })
  show!: ShowCreateNestedOneWithoutLikesInput;
}
