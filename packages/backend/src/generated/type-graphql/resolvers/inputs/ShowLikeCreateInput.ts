import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowCreateNestedOneWithoutLikesInput } from "../inputs/ShowCreateNestedOneWithoutLikesInput";
import { UserCreateNestedOneWithoutLikedShowsInput } from "../inputs/UserCreateNestedOneWithoutLikedShowsInput";

@TypeGraphQL.InputType("ShowLikeCreateInput", {
  isAbstract: true
})
export class ShowLikeCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutLikedShowsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutLikedShowsInput;

  @TypeGraphQL.Field(_type => ShowCreateNestedOneWithoutLikesInput, {
    nullable: false
  })
  show!: ShowCreateNestedOneWithoutLikesInput;
}
