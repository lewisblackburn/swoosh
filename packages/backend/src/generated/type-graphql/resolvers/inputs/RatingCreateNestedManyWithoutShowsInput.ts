import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RatingCreateOrConnectWithoutShowsInput } from "../inputs/RatingCreateOrConnectWithoutShowsInput";
import { RatingCreateWithoutShowsInput } from "../inputs/RatingCreateWithoutShowsInput";
import { RatingWhereUniqueInput } from "../inputs/RatingWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RatingCreateNestedManyWithoutShowsInput {
  @TypeGraphQL.Field(_type => [RatingCreateWithoutShowsInput], {
    nullable: true
  })
  create?: RatingCreateWithoutShowsInput[] | undefined;

  @TypeGraphQL.Field(_type => [RatingCreateOrConnectWithoutShowsInput], {
    nullable: true
  })
  connectOrCreate?: RatingCreateOrConnectWithoutShowsInput[] | undefined;

  @TypeGraphQL.Field(_type => [RatingWhereUniqueInput], {
    nullable: true
  })
  connect?: RatingWhereUniqueInput[] | undefined;
}
