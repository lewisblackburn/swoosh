import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongLikeCreateManyUserInput } from "../inputs/SongLikeCreateManyUserInput";

@TypeGraphQL.InputType("SongLikeCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class SongLikeCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [SongLikeCreateManyUserInput], {
    nullable: false
  })
  data!: SongLikeCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
