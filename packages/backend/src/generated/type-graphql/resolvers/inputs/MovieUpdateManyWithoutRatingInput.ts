import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateOrConnectWithoutRatingInput } from "../inputs/MovieCreateOrConnectWithoutRatingInput";
import { MovieCreateWithoutRatingInput } from "../inputs/MovieCreateWithoutRatingInput";
import { MovieScalarWhereInput } from "../inputs/MovieScalarWhereInput";
import { MovieUpdateManyWithWhereWithoutRatingInput } from "../inputs/MovieUpdateManyWithWhereWithoutRatingInput";
import { MovieUpdateWithWhereUniqueWithoutRatingInput } from "../inputs/MovieUpdateWithWhereUniqueWithoutRatingInput";
import { MovieUpsertWithWhereUniqueWithoutRatingInput } from "../inputs/MovieUpsertWithWhereUniqueWithoutRatingInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MovieUpdateManyWithoutRatingInput {
  @TypeGraphQL.Field(_type => [MovieCreateWithoutRatingInput], {
    nullable: true
  })
  create?: MovieCreateWithoutRatingInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieCreateOrConnectWithoutRatingInput], {
    nullable: true
  })
  connectOrCreate?: MovieCreateOrConnectWithoutRatingInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieUpsertWithWhereUniqueWithoutRatingInput], {
    nullable: true
  })
  upsert?: MovieUpsertWithWhereUniqueWithoutRatingInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieWhereUniqueInput], {
    nullable: true
  })
  connect?: MovieWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieWhereUniqueInput], {
    nullable: true
  })
  set?: MovieWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieWhereUniqueInput], {
    nullable: true
  })
  disconnect?: MovieWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieWhereUniqueInput], {
    nullable: true
  })
  delete?: MovieWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieUpdateWithWhereUniqueWithoutRatingInput], {
    nullable: true
  })
  update?: MovieUpdateWithWhereUniqueWithoutRatingInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieUpdateManyWithWhereWithoutRatingInput], {
    nullable: true
  })
  updateMany?: MovieUpdateManyWithWhereWithoutRatingInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MovieScalarWhereInput[] | undefined;
}
