import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RatingCreateOrConnectWithoutShowsInput } from "../inputs/RatingCreateOrConnectWithoutShowsInput";
import { RatingCreateWithoutShowsInput } from "../inputs/RatingCreateWithoutShowsInput";
import { RatingScalarWhereInput } from "../inputs/RatingScalarWhereInput";
import { RatingUpdateManyWithWhereWithoutShowsInput } from "../inputs/RatingUpdateManyWithWhereWithoutShowsInput";
import { RatingUpdateWithWhereUniqueWithoutShowsInput } from "../inputs/RatingUpdateWithWhereUniqueWithoutShowsInput";
import { RatingUpsertWithWhereUniqueWithoutShowsInput } from "../inputs/RatingUpsertWithWhereUniqueWithoutShowsInput";
import { RatingWhereUniqueInput } from "../inputs/RatingWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RatingUpdateManyWithoutShowsInput {
  @TypeGraphQL.Field(_type => [RatingCreateWithoutShowsInput], {
    nullable: true
  })
  create?: RatingCreateWithoutShowsInput[] | undefined;

  @TypeGraphQL.Field(_type => [RatingCreateOrConnectWithoutShowsInput], {
    nullable: true
  })
  connectOrCreate?: RatingCreateOrConnectWithoutShowsInput[] | undefined;

  @TypeGraphQL.Field(_type => [RatingUpsertWithWhereUniqueWithoutShowsInput], {
    nullable: true
  })
  upsert?: RatingUpsertWithWhereUniqueWithoutShowsInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [RatingUpdateWithWhereUniqueWithoutShowsInput], {
    nullable: true
  })
  update?: RatingUpdateWithWhereUniqueWithoutShowsInput[] | undefined;

  @TypeGraphQL.Field(_type => [RatingUpdateManyWithWhereWithoutShowsInput], {
    nullable: true
  })
  updateMany?: RatingUpdateManyWithWhereWithoutShowsInput[] | undefined;

  @TypeGraphQL.Field(_type => [RatingScalarWhereInput], {
    nullable: true
  })
  deleteMany?: RatingScalarWhereInput[] | undefined;
}
