import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowCreateWithoutPlatformsInput } from "../inputs/ShowCreateWithoutPlatformsInput";
import { ShowUpdateWithoutPlatformsInput } from "../inputs/ShowUpdateWithoutPlatformsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ShowUpsertWithoutPlatformsInput {
  @TypeGraphQL.Field(_type => ShowUpdateWithoutPlatformsInput, {
    nullable: false
  })
  update!: ShowUpdateWithoutPlatformsInput;

  @TypeGraphQL.Field(_type => ShowCreateWithoutPlatformsInput, {
    nullable: false
  })
  create!: ShowCreateWithoutPlatformsInput;
}
