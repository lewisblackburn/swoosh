import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlatformCreateOrConnectWithoutPlatformOnMovieInput } from "../inputs/PlatformCreateOrConnectWithoutPlatformOnMovieInput";
import { PlatformCreateWithoutPlatformOnMovieInput } from "../inputs/PlatformCreateWithoutPlatformOnMovieInput";
import { PlatformUpdateWithoutPlatformOnMovieInput } from "../inputs/PlatformUpdateWithoutPlatformOnMovieInput";
import { PlatformUpsertWithoutPlatformOnMovieInput } from "../inputs/PlatformUpsertWithoutPlatformOnMovieInput";
import { PlatformWhereUniqueInput } from "../inputs/PlatformWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PlatformUpdateOneRequiredWithoutPlatformOnMovieInput {
  @TypeGraphQL.Field(_type => PlatformCreateWithoutPlatformOnMovieInput, {
    nullable: true
  })
  create?: PlatformCreateWithoutPlatformOnMovieInput | undefined;

  @TypeGraphQL.Field(_type => PlatformCreateOrConnectWithoutPlatformOnMovieInput, {
    nullable: true
  })
  connectOrCreate?: PlatformCreateOrConnectWithoutPlatformOnMovieInput | undefined;

  @TypeGraphQL.Field(_type => PlatformUpsertWithoutPlatformOnMovieInput, {
    nullable: true
  })
  upsert?: PlatformUpsertWithoutPlatformOnMovieInput | undefined;

  @TypeGraphQL.Field(_type => PlatformWhereUniqueInput, {
    nullable: true
  })
  connect?: PlatformWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PlatformUpdateWithoutPlatformOnMovieInput, {
    nullable: true
  })
  update?: PlatformUpdateWithoutPlatformOnMovieInput | undefined;
}
