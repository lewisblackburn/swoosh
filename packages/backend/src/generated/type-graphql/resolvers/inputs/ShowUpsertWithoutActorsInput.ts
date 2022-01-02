import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowCreateWithoutActorsInput } from "../inputs/ShowCreateWithoutActorsInput";
import { ShowUpdateWithoutActorsInput } from "../inputs/ShowUpdateWithoutActorsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ShowUpsertWithoutActorsInput {
  @TypeGraphQL.Field(_type => ShowUpdateWithoutActorsInput, {
    nullable: false
  })
  update!: ShowUpdateWithoutActorsInput;

  @TypeGraphQL.Field(_type => ShowCreateWithoutActorsInput, {
    nullable: false
  })
  create!: ShowCreateWithoutActorsInput;
}
