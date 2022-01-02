import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlatformOnMovieOrderByWithRelationInput } from "../../../inputs/PlatformOnMovieOrderByWithRelationInput";
import { PlatformOnMovieWhereInput } from "../../../inputs/PlatformOnMovieWhereInput";
import { PlatformOnMovieWhereUniqueInput } from "../../../inputs/PlatformOnMovieWhereUniqueInput";
import { PlatformOnMovieScalarFieldEnum } from "../../../../enums/PlatformOnMovieScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class PlatformPlatformOnMovieArgs {
  @TypeGraphQL.Field(_type => PlatformOnMovieWhereInput, {
    nullable: true
  })
  where?: PlatformOnMovieWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PlatformOnMovieOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PlatformOnMovieOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PlatformOnMovieWhereUniqueInput, {
    nullable: true
  })
  cursor?: PlatformOnMovieWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PlatformOnMovieScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"price" | "platformId" | "movieId"> | undefined;
}
