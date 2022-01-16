import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VoteWhereInput } from "../inputs/VoteWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class VoteListRelationFilter {
  @TypeGraphQL.Field(_type => VoteWhereInput, {
    nullable: true
  })
  every?: VoteWhereInput | undefined;

  @TypeGraphQL.Field(_type => VoteWhereInput, {
    nullable: true
  })
  some?: VoteWhereInput | undefined;

  @TypeGraphQL.Field(_type => VoteWhereInput, {
    nullable: true
  })
  none?: VoteWhereInput | undefined;
}
