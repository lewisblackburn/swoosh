import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongInShowCreateWithoutShowInput } from "../inputs/SongInShowCreateWithoutShowInput";
import { SongInShowWhereUniqueInput } from "../inputs/SongInShowWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SongInShowCreateOrConnectWithoutShowInput {
  @TypeGraphQL.Field(_type => SongInShowWhereUniqueInput, {
    nullable: false
  })
  where!: SongInShowWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongInShowCreateWithoutShowInput, {
    nullable: false
  })
  create!: SongInShowCreateWithoutShowInput;
}
