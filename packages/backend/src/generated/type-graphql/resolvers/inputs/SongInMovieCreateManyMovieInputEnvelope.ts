import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongInMovieCreateManyMovieInput } from "../inputs/SongInMovieCreateManyMovieInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SongInMovieCreateManyMovieInputEnvelope {
  @TypeGraphQL.Field(_type => [SongInMovieCreateManyMovieInput], {
    nullable: false
  })
  data!: SongInMovieCreateManyMovieInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
