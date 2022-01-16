import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FavouriteScalarWhereInput {
  @TypeGraphQL.Field(_type => [FavouriteScalarWhereInput], {
    nullable: true
  })
  AND?: FavouriteScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FavouriteScalarWhereInput], {
    nullable: true
  })
  OR?: FavouriteScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FavouriteScalarWhereInput], {
    nullable: true
  })
  NOT?: FavouriteScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;
}
