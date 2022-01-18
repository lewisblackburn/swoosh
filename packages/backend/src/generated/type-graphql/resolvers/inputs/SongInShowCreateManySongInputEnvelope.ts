import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongInShowCreateManySongInput } from "../inputs/SongInShowCreateManySongInput";

@TypeGraphQL.InputType("SongInShowCreateManySongInputEnvelope", {
  isAbstract: true
})
export class SongInShowCreateManySongInputEnvelope {
  @TypeGraphQL.Field(_type => [SongInShowCreateManySongInput], {
    nullable: false
  })
  data!: SongInShowCreateManySongInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
