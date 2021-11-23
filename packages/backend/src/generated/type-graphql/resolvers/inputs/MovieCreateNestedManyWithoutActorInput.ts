import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateManyActorInputEnvelope } from "../inputs/MovieCreateManyActorInputEnvelope";
import { MovieCreateOrConnectWithoutActorInput } from "../inputs/MovieCreateOrConnectWithoutActorInput";
import { MovieCreateWithoutActorInput } from "../inputs/MovieCreateWithoutActorInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MovieCreateNestedManyWithoutActorInput {
  @TypeGraphQL.Field(_type => [MovieCreateWithoutActorInput], {
    nullable: true
  })
  create?: MovieCreateWithoutActorInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieCreateOrConnectWithoutActorInput], {
    nullable: true
  })
  connectOrCreate?: MovieCreateOrConnectWithoutActorInput[] | undefined;

  @TypeGraphQL.Field(_type => MovieCreateManyActorInputEnvelope, {
    nullable: true
  })
  createMany?: MovieCreateManyActorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MovieWhereUniqueInput], {
    nullable: true
  })
  connect?: MovieWhereUniqueInput[] | undefined;
}
