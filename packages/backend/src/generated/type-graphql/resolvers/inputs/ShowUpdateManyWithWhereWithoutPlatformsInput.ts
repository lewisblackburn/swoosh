import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowScalarWhereInput } from "../inputs/ShowScalarWhereInput";
import { ShowUpdateManyMutationInput } from "../inputs/ShowUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ShowUpdateManyWithWhereWithoutPlatformsInput {
  @TypeGraphQL.Field(_type => ShowScalarWhereInput, {
    nullable: false
  })
  where!: ShowScalarWhereInput;

  @TypeGraphQL.Field(_type => ShowUpdateManyMutationInput, {
    nullable: false
  })
  data!: ShowUpdateManyMutationInput;
}
