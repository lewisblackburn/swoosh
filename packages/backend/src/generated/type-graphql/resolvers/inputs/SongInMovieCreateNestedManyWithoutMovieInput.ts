import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongInMovieCreateManyMovieInputEnvelope } from "../inputs/SongInMovieCreateManyMovieInputEnvelope";
import { SongInMovieCreateOrConnectWithoutMovieInput } from "../inputs/SongInMovieCreateOrConnectWithoutMovieInput";
import { SongInMovieCreateWithoutMovieInput } from "../inputs/SongInMovieCreateWithoutMovieInput";
import { SongInMovieWhereUniqueInput } from "../inputs/SongInMovieWhereUniqueInput";

@TypeGraphQL.InputType("SongInMovieCreateNestedManyWithoutMovieInput", {
  isAbstract: true
})
export class SongInMovieCreateNestedManyWithoutMovieInput {
  @TypeGraphQL.Field(_type => [SongInMovieCreateWithoutMovieInput], {
    nullable: true
  })
  create?: SongInMovieCreateWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongInMovieCreateOrConnectWithoutMovieInput], {
    nullable: true
  })
  connectOrCreate?: SongInMovieCreateOrConnectWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => SongInMovieCreateManyMovieInputEnvelope, {
    nullable: true
  })
  createMany?: SongInMovieCreateManyMovieInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SongInMovieWhereUniqueInput], {
    nullable: true
  })
  connect?: SongInMovieWhereUniqueInput[] | undefined;
}
