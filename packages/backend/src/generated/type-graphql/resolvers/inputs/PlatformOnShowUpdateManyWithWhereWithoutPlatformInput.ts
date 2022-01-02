import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlatformOnShowScalarWhereInput } from "../inputs/PlatformOnShowScalarWhereInput";
import { PlatformOnShowUpdateManyMutationInput } from "../inputs/PlatformOnShowUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PlatformOnShowUpdateManyWithWhereWithoutPlatformInput {
  @TypeGraphQL.Field(_type => PlatformOnShowScalarWhereInput, {
    nullable: false
  })
  where!: PlatformOnShowScalarWhereInput;

  @TypeGraphQL.Field(_type => PlatformOnShowUpdateManyMutationInput, {
    nullable: false
  })
  data!: PlatformOnShowUpdateManyMutationInput;
}
