import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActorInMovieCreateManyPersonInput } from "../inputs/ActorInMovieCreateManyPersonInput";

@TypeGraphQL.InputType("ActorInMovieCreateManyPersonInputEnvelope", {
  isAbstract: true
})
export class ActorInMovieCreateManyPersonInputEnvelope {
  @TypeGraphQL.Field(_type => [ActorInMovieCreateManyPersonInput], {
    nullable: false
  })
  data!: ActorInMovieCreateManyPersonInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
