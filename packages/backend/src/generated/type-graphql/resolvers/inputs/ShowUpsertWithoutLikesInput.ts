import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowCreateWithoutLikesInput } from "../inputs/ShowCreateWithoutLikesInput";
import { ShowUpdateWithoutLikesInput } from "../inputs/ShowUpdateWithoutLikesInput";

@TypeGraphQL.InputType("ShowUpsertWithoutLikesInput", {
  isAbstract: true
})
export class ShowUpsertWithoutLikesInput {
  @TypeGraphQL.Field(_type => ShowUpdateWithoutLikesInput, {
    nullable: false
  })
  update!: ShowUpdateWithoutLikesInput;

  @TypeGraphQL.Field(_type => ShowCreateWithoutLikesInput, {
    nullable: false
  })
  create!: ShowCreateWithoutLikesInput;
}
