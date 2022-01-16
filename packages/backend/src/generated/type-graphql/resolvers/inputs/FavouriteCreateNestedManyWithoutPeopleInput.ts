import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FavouriteCreateOrConnectWithoutPeopleInput } from "../inputs/FavouriteCreateOrConnectWithoutPeopleInput";
import { FavouriteCreateWithoutPeopleInput } from "../inputs/FavouriteCreateWithoutPeopleInput";
import { FavouriteWhereUniqueInput } from "../inputs/FavouriteWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FavouriteCreateNestedManyWithoutPeopleInput {
  @TypeGraphQL.Field(_type => [FavouriteCreateWithoutPeopleInput], {
    nullable: true
  })
  create?: FavouriteCreateWithoutPeopleInput[] | undefined;

  @TypeGraphQL.Field(_type => [FavouriteCreateOrConnectWithoutPeopleInput], {
    nullable: true
  })
  connectOrCreate?: FavouriteCreateOrConnectWithoutPeopleInput[] | undefined;

  @TypeGraphQL.Field(_type => [FavouriteWhereUniqueInput], {
    nullable: true
  })
  connect?: FavouriteWhereUniqueInput[] | undefined;
}
