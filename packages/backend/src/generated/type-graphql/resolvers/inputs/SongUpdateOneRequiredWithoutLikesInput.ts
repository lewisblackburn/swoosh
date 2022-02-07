import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateOrConnectWithoutLikesInput } from "../inputs/SongCreateOrConnectWithoutLikesInput";
import { SongCreateWithoutLikesInput } from "../inputs/SongCreateWithoutLikesInput";
import { SongUpdateWithoutLikesInput } from "../inputs/SongUpdateWithoutLikesInput";
import { SongUpsertWithoutLikesInput } from "../inputs/SongUpsertWithoutLikesInput";
import { SongWhereUniqueInput } from "../inputs/SongWhereUniqueInput";

@TypeGraphQL.InputType("SongUpdateOneRequiredWithoutLikesInput", {
  isAbstract: true
})
export class SongUpdateOneRequiredWithoutLikesInput {
  @TypeGraphQL.Field(_type => SongCreateWithoutLikesInput, {
    nullable: true
  })
  create?: SongCreateWithoutLikesInput | undefined;

  @TypeGraphQL.Field(_type => SongCreateOrConnectWithoutLikesInput, {
    nullable: true
  })
  connectOrCreate?: SongCreateOrConnectWithoutLikesInput | undefined;

  @TypeGraphQL.Field(_type => SongUpsertWithoutLikesInput, {
    nullable: true
  })
  upsert?: SongUpsertWithoutLikesInput | undefined;

  @TypeGraphQL.Field(_type => SongWhereUniqueInput, {
    nullable: true
  })
  connect?: SongWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => SongUpdateWithoutLikesInput, {
    nullable: true
  })
  update?: SongUpdateWithoutLikesInput | undefined;
}
