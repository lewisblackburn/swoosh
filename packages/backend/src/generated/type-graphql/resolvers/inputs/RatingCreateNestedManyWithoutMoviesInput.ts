import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RatingCreateOrConnectWithoutMoviesInput } from "../inputs/RatingCreateOrConnectWithoutMoviesInput";
import { RatingCreateWithoutMoviesInput } from "../inputs/RatingCreateWithoutMoviesInput";
import { RatingWhereUniqueInput } from "../inputs/RatingWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RatingCreateNestedManyWithoutMoviesInput {
  @TypeGraphQL.Field(_type => [RatingCreateWithoutMoviesInput], {
    nullable: true
  })
  create?: RatingCreateWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(_type => [RatingCreateOrConnectWithoutMoviesInput], {
    nullable: true
  })
  connectOrCreate?: RatingCreateOrConnectWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(_type => [RatingWhereUniqueInput], {
    nullable: true
  })
  connect?: RatingWhereUniqueInput[] | undefined;
}
