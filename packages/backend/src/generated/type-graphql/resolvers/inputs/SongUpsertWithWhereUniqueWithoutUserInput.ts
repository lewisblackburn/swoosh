import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateWithoutUserInput } from "../inputs/SongCreateWithoutUserInput";
import { SongUpdateWithoutUserInput } from "../inputs/SongUpdateWithoutUserInput";
import { SongWhereUniqueInput } from "../inputs/SongWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SongUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => SongWhereUniqueInput, {
    nullable: false
  })
  where!: SongWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongUpdateWithoutUserInput, {
    nullable: false
  })
  update!: SongUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => SongCreateWithoutUserInput, {
    nullable: false
  })
  create!: SongCreateWithoutUserInput;
}
