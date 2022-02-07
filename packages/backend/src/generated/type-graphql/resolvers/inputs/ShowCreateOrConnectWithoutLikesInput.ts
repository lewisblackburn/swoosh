import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowCreateWithoutLikesInput } from "../inputs/ShowCreateWithoutLikesInput";
import { ShowWhereUniqueInput } from "../inputs/ShowWhereUniqueInput";

@TypeGraphQL.InputType("ShowCreateOrConnectWithoutLikesInput", {
  isAbstract: true
})
export class ShowCreateOrConnectWithoutLikesInput {
  @TypeGraphQL.Field(_type => ShowWhereUniqueInput, {
    nullable: false
  })
  where!: ShowWhereUniqueInput;

  @TypeGraphQL.Field(_type => ShowCreateWithoutLikesInput, {
    nullable: false
  })
  create!: ShowCreateWithoutLikesInput;
}
