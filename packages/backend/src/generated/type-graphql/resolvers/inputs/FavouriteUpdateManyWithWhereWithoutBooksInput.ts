import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FavouriteScalarWhereInput } from "../inputs/FavouriteScalarWhereInput";
import { FavouriteUpdateManyMutationInput } from "../inputs/FavouriteUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FavouriteUpdateManyWithWhereWithoutBooksInput {
  @TypeGraphQL.Field(_type => FavouriteScalarWhereInput, {
    nullable: false
  })
  where!: FavouriteScalarWhereInput;

  @TypeGraphQL.Field(_type => FavouriteUpdateManyMutationInput, {
    nullable: false
  })
  data!: FavouriteUpdateManyMutationInput;
}
