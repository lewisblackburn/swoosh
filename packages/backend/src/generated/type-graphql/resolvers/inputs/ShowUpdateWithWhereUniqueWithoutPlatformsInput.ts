import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowUpdateWithoutPlatformsInput } from "../inputs/ShowUpdateWithoutPlatformsInput";
import { ShowWhereUniqueInput } from "../inputs/ShowWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ShowUpdateWithWhereUniqueWithoutPlatformsInput {
  @TypeGraphQL.Field(_type => ShowWhereUniqueInput, {
    nullable: false
  })
  where!: ShowWhereUniqueInput;

  @TypeGraphQL.Field(_type => ShowUpdateWithoutPlatformsInput, {
    nullable: false
  })
  data!: ShowUpdateWithoutPlatformsInput;
}
