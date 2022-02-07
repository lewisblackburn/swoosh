import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowLikeScalarWhereInput } from "../inputs/ShowLikeScalarWhereInput";
import { ShowLikeUpdateManyMutationInput } from "../inputs/ShowLikeUpdateManyMutationInput";

@TypeGraphQL.InputType("ShowLikeUpdateManyWithWhereWithoutShowInput", {
  isAbstract: true
})
export class ShowLikeUpdateManyWithWhereWithoutShowInput {
  @TypeGraphQL.Field(_type => ShowLikeScalarWhereInput, {
    nullable: false
  })
  where!: ShowLikeScalarWhereInput;

  @TypeGraphQL.Field(_type => ShowLikeUpdateManyMutationInput, {
    nullable: false
  })
  data!: ShowLikeUpdateManyMutationInput;
}
