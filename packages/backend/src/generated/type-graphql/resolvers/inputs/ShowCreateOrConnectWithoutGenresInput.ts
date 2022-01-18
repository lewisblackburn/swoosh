import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowCreateWithoutGenresInput } from "../inputs/ShowCreateWithoutGenresInput";
import { ShowWhereUniqueInput } from "../inputs/ShowWhereUniqueInput";

@TypeGraphQL.InputType("ShowCreateOrConnectWithoutGenresInput", {
  isAbstract: true
})
export class ShowCreateOrConnectWithoutGenresInput {
  @TypeGraphQL.Field(_type => ShowWhereUniqueInput, {
    nullable: false
  })
  where!: ShowWhereUniqueInput;

  @TypeGraphQL.Field(_type => ShowCreateWithoutGenresInput, {
    nullable: false
  })
  create!: ShowCreateWithoutGenresInput;
}
