import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ActorInShowScalarWhereInput {
  @TypeGraphQL.Field(_type => [ActorInShowScalarWhereInput], {
    nullable: true
  })
  AND?: ActorInShowScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActorInShowScalarWhereInput], {
    nullable: true
  })
  OR?: ActorInShowScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActorInShowScalarWhereInput], {
    nullable: true
  })
  NOT?: ActorInShowScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  showId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  personId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  role?: StringFilter | undefined;
}
