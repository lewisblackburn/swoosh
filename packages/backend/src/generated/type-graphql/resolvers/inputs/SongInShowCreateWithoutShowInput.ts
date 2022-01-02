import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateNestedOneWithoutSongInShowInput } from "../inputs/SongCreateNestedOneWithoutSongInShowInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SongInShowCreateWithoutShowInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  timestamp!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => SongCreateNestedOneWithoutSongInShowInput, {
    nullable: false
  })
  song!: SongCreateNestedOneWithoutSongInShowInput;
}
