import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongInShowCreateWithoutShowInput } from "../inputs/SongInShowCreateWithoutShowInput";
import { SongInShowUpdateWithoutShowInput } from "../inputs/SongInShowUpdateWithoutShowInput";
import { SongInShowWhereUniqueInput } from "../inputs/SongInShowWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SongInShowUpsertWithWhereUniqueWithoutShowInput {
  @TypeGraphQL.Field(_type => SongInShowWhereUniqueInput, {
    nullable: false
  })
  where!: SongInShowWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongInShowUpdateWithoutShowInput, {
    nullable: false
  })
  update!: SongInShowUpdateWithoutShowInput;

  @TypeGraphQL.Field(_type => SongInShowCreateWithoutShowInput, {
    nullable: false
  })
  create!: SongInShowCreateWithoutShowInput;
}
