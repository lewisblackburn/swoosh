import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowLikeCreateManyShowInput } from "../inputs/ShowLikeCreateManyShowInput";

@TypeGraphQL.InputType("ShowLikeCreateManyShowInputEnvelope", {
  isAbstract: true
})
export class ShowLikeCreateManyShowInputEnvelope {
  @TypeGraphQL.Field(_type => [ShowLikeCreateManyShowInput], {
    nullable: false
  })
  data!: ShowLikeCreateManyShowInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
