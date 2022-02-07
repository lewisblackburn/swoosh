import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowLikeCreateManyUserInput } from "../inputs/ShowLikeCreateManyUserInput";

@TypeGraphQL.InputType("ShowLikeCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class ShowLikeCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [ShowLikeCreateManyUserInput], {
    nullable: false
  })
  data!: ShowLikeCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
