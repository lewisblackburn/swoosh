import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateManyActorInputEnvelope } from "../inputs/MovieCreateManyActorInputEnvelope";
import { MovieCreateOrConnectWithoutActorInput } from "../inputs/MovieCreateOrConnectWithoutActorInput";
import { MovieCreateWithoutActorInput } from "../inputs/MovieCreateWithoutActorInput";
import { MovieScalarWhereInput } from "../inputs/MovieScalarWhereInput";
import { MovieUpdateManyWithWhereWithoutActorInput } from "../inputs/MovieUpdateManyWithWhereWithoutActorInput";
import { MovieUpdateWithWhereUniqueWithoutActorInput } from "../inputs/MovieUpdateWithWhereUniqueWithoutActorInput";
import { MovieUpsertWithWhereUniqueWithoutActorInput } from "../inputs/MovieUpsertWithWhereUniqueWithoutActorInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MovieUpdateManyWithoutActorInput {
  @TypeGraphQL.Field(_type => [MovieCreateWithoutActorInput], {
    nullable: true
  })
  create?: MovieCreateWithoutActorInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieCreateOrConnectWithoutActorInput], {
    nullable: true
  })
  connectOrCreate?: MovieCreateOrConnectWithoutActorInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieUpsertWithWhereUniqueWithoutActorInput], {
    nullable: true
  })
  upsert?: MovieUpsertWithWhereUniqueWithoutActorInput[] | undefined;

  @TypeGraphQL.Field(_type => MovieCreateManyActorInputEnvelope, {
    nullable: true
  })
  createMany?: MovieCreateManyActorInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [MovieUpdateWithWhereUniqueWithoutActorInput], {
    nullable: true
  })
  update?: MovieUpdateWithWhereUniqueWithoutActorInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieUpdateManyWithWhereWithoutActorInput], {
    nullable: true
  })
  updateMany?: MovieUpdateManyWithWhereWithoutActorInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MovieScalarWhereInput[] | undefined;
}
