import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowCreateOrConnectWithoutRatingInput } from "../inputs/ShowCreateOrConnectWithoutRatingInput";
import { ShowCreateWithoutRatingInput } from "../inputs/ShowCreateWithoutRatingInput";
import { ShowWhereUniqueInput } from "../inputs/ShowWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ShowCreateNestedManyWithoutRatingInput {
  @TypeGraphQL.Field(_type => [ShowCreateWithoutRatingInput], {
    nullable: true
  })
  create?: ShowCreateWithoutRatingInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowCreateOrConnectWithoutRatingInput], {
    nullable: true
  })
  connectOrCreate?: ShowCreateOrConnectWithoutRatingInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowWhereUniqueInput], {
    nullable: true
  })
  connect?: ShowWhereUniqueInput[] | undefined;
}
