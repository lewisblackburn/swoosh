import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongInShowOrderByWithRelationInput } from "../../../inputs/SongInShowOrderByWithRelationInput";
import { SongInShowWhereInput } from "../../../inputs/SongInShowWhereInput";
import { SongInShowWhereUniqueInput } from "../../../inputs/SongInShowWhereUniqueInput";
import { SongInShowScalarFieldEnum } from "../../../../enums/SongInShowScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class ShowSoundtrackArgs {
  @TypeGraphQL.Field(_type => SongInShowWhereInput, {
    nullable: true
  })
  where?: SongInShowWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SongInShowOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SongInShowOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SongInShowWhereUniqueInput, {
    nullable: true
  })
  cursor?: SongInShowWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [SongInShowScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"timestamp" | "description" | "songId" | "showId"> | undefined;
}
