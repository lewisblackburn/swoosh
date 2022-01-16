import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RatingCreateOrConnectWithoutMoviesInput } from "../inputs/RatingCreateOrConnectWithoutMoviesInput";
import { RatingCreateWithoutMoviesInput } from "../inputs/RatingCreateWithoutMoviesInput";
import { RatingScalarWhereInput } from "../inputs/RatingScalarWhereInput";
import { RatingUpdateManyWithWhereWithoutMoviesInput } from "../inputs/RatingUpdateManyWithWhereWithoutMoviesInput";
import { RatingUpdateWithWhereUniqueWithoutMoviesInput } from "../inputs/RatingUpdateWithWhereUniqueWithoutMoviesInput";
import { RatingUpsertWithWhereUniqueWithoutMoviesInput } from "../inputs/RatingUpsertWithWhereUniqueWithoutMoviesInput";
import { RatingWhereUniqueInput } from "../inputs/RatingWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RatingUpdateManyWithoutMoviesInput {
  @TypeGraphQL.Field(_type => [RatingCreateWithoutMoviesInput], {
    nullable: true
  })
  create?: RatingCreateWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(_type => [RatingCreateOrConnectWithoutMoviesInput], {
    nullable: true
  })
  connectOrCreate?: RatingCreateOrConnectWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(_type => [RatingUpsertWithWhereUniqueWithoutMoviesInput], {
    nullable: true
  })
  upsert?: RatingUpsertWithWhereUniqueWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(_type => [RatingWhereUniqueInput], {
    nullable: true
  })
  connect?: RatingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RatingWhereUniqueInput], {
    nullable: true
  })
  set?: RatingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RatingWhereUniqueInput], {
    nullable: true
  })
  disconnect?: RatingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RatingWhereUniqueInput], {
    nullable: true
  })
  delete?: RatingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RatingUpdateWithWhereUniqueWithoutMoviesInput], {
    nullable: true
  })
  update?: RatingUpdateWithWhereUniqueWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(_type => [RatingUpdateManyWithWhereWithoutMoviesInput], {
    nullable: true
  })
  updateMany?: RatingUpdateManyWithWhereWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(_type => [RatingScalarWhereInput], {
    nullable: true
  })
  deleteMany?: RatingScalarWhereInput[] | undefined;
}
