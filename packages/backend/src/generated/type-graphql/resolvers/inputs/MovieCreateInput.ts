import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActorInMovieCreateNestedManyWithoutMovieInput } from "../inputs/ActorInMovieCreateNestedManyWithoutMovieInput";
import { PlatformOnMovieCreateNestedManyWithoutMovieInput } from "../inputs/PlatformOnMovieCreateNestedManyWithoutMovieInput";
import { SongInMovieCreateNestedManyWithoutMovieInput } from "../inputs/SongInMovieCreateNestedManyWithoutMovieInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MovieCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  thumbnail?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  locked?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  released?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => ActorInMovieCreateNestedManyWithoutMovieInput, {
    nullable: true
  })
  actors?: ActorInMovieCreateNestedManyWithoutMovieInput | undefined;

  @TypeGraphQL.Field(_type => PlatformOnMovieCreateNestedManyWithoutMovieInput, {
    nullable: true
  })
  platforms?: PlatformOnMovieCreateNestedManyWithoutMovieInput | undefined;

  @TypeGraphQL.Field(_type => SongInMovieCreateNestedManyWithoutMovieInput, {
    nullable: true
  })
  soundtrack?: SongInMovieCreateNestedManyWithoutMovieInput | undefined;
}
