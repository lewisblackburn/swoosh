import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { PersonRelationFilter } from "../inputs/PersonRelationFilter";
import { ShowRelationFilter } from "../inputs/ShowRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ActorInShowWhereInput {
  @TypeGraphQL.Field(_type => [ActorInShowWhereInput], {
    nullable: true
  })
  AND?: ActorInShowWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActorInShowWhereInput], {
    nullable: true
  })
  OR?: ActorInShowWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActorInShowWhereInput], {
    nullable: true
  })
  NOT?: ActorInShowWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => ShowRelationFilter, {
    nullable: true
  })
  show?: ShowRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  showId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => PersonRelationFilter, {
    nullable: true
  })
  person?: PersonRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  personId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  role?: StringFilter | undefined;
}
