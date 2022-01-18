import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongInShowUpdateWithoutShowInput } from "../inputs/SongInShowUpdateWithoutShowInput";
import { SongInShowWhereUniqueInput } from "../inputs/SongInShowWhereUniqueInput";

@TypeGraphQL.InputType("SongInShowUpdateWithWhereUniqueWithoutShowInput", {
  isAbstract: true
})
export class SongInShowUpdateWithWhereUniqueWithoutShowInput {
  @TypeGraphQL.Field(_type => SongInShowWhereUniqueInput, {
    nullable: false
  })
  where!: SongInShowWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongInShowUpdateWithoutShowInput, {
    nullable: false
  })
  data!: SongInShowUpdateWithoutShowInput;
}
