import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActorInMovieCreateManyMovieInput } from "../inputs/ActorInMovieCreateManyMovieInput";

@TypeGraphQL.InputType("ActorInMovieCreateManyMovieInputEnvelope", {
  isAbstract: true
})
export class ActorInMovieCreateManyMovieInputEnvelope {
  @TypeGraphQL.Field(_type => [ActorInMovieCreateManyMovieInput], {
    nullable: false
  })
  data!: ActorInMovieCreateManyMovieInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
