import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutLikedShowsInput } from "../inputs/UserCreateNestedOneWithoutLikedShowsInput";

@TypeGraphQL.InputType("ShowLikeCreateWithoutShowInput", {
  isAbstract: true
})
export class ShowLikeCreateWithoutShowInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutLikedShowsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutLikedShowsInput;
}
