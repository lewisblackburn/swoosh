import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateOrConnectWithoutFavouritesInput } from "../inputs/PersonCreateOrConnectWithoutFavouritesInput";
import { PersonCreateWithoutFavouritesInput } from "../inputs/PersonCreateWithoutFavouritesInput";
import { PersonWhereUniqueInput } from "../inputs/PersonWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PersonCreateNestedManyWithoutFavouritesInput {
  @TypeGraphQL.Field(_type => [PersonCreateWithoutFavouritesInput], {
    nullable: true
  })
  create?: PersonCreateWithoutFavouritesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonCreateOrConnectWithoutFavouritesInput], {
    nullable: true
  })
  connectOrCreate?: PersonCreateOrConnectWithoutFavouritesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonWhereUniqueInput], {
    nullable: true
  })
  connect?: PersonWhereUniqueInput[] | undefined;
}
