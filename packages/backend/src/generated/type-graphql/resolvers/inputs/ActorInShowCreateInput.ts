import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateNestedOneWithoutShowsInput } from "../inputs/PersonCreateNestedOneWithoutShowsInput";
import { ShowCreateNestedOneWithoutActorsInput } from "../inputs/ShowCreateNestedOneWithoutActorsInput";

@TypeGraphQL.InputType("ActorInShowCreateInput", {
  isAbstract: true
})
export class ActorInShowCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  role!: string;

  @TypeGraphQL.Field(_type => ShowCreateNestedOneWithoutActorsInput, {
    nullable: false
  })
  show!: ShowCreateNestedOneWithoutActorsInput;

  @TypeGraphQL.Field(_type => PersonCreateNestedOneWithoutShowsInput, {
    nullable: false
  })
  person!: PersonCreateNestedOneWithoutShowsInput;
}
