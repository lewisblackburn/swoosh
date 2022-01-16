import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class VoteScalarWhereInput {
  @TypeGraphQL.Field(_type => [VoteScalarWhereInput], {
    nullable: true
  })
  AND?: VoteScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VoteScalarWhereInput], {
    nullable: true
  })
  OR?: VoteScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VoteScalarWhereInput], {
    nullable: true
  })
  NOT?: VoteScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  reviewId?: IntFilter | undefined;
}
