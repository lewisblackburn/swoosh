import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlatformOnMovieCreateManyPlatformInput } from "../inputs/PlatformOnMovieCreateManyPlatformInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PlatformOnMovieCreateManyPlatformInputEnvelope {
  @TypeGraphQL.Field(_type => [PlatformOnMovieCreateManyPlatformInput], {
    nullable: false
  })
  data!: PlatformOnMovieCreateManyPlatformInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
