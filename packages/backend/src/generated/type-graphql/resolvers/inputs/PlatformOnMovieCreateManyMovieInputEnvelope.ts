import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlatformOnMovieCreateManyMovieInput } from "../inputs/PlatformOnMovieCreateManyMovieInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PlatformOnMovieCreateManyMovieInputEnvelope {
  @TypeGraphQL.Field(_type => [PlatformOnMovieCreateManyMovieInput], {
    nullable: false
  })
  data!: PlatformOnMovieCreateManyMovieInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
