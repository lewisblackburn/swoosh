import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowCreateNestedOneWithoutActorsInput } from "../inputs/ShowCreateNestedOneWithoutActorsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ActorInShowCreateWithoutPersonInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  role!: string;

  @TypeGraphQL.Field(_type => ShowCreateNestedOneWithoutActorsInput, {
    nullable: false
  })
  show!: ShowCreateNestedOneWithoutActorsInput;
}
