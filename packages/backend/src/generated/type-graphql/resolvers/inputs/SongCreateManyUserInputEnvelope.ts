import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateManyUserInput } from "../inputs/SongCreateManyUserInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SongCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [SongCreateManyUserInput], {
    nullable: false
  })
  data!: SongCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
