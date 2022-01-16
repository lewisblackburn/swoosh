import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RatingCreateWithoutShowsInput } from "../inputs/RatingCreateWithoutShowsInput";
import { RatingWhereUniqueInput } from "../inputs/RatingWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RatingCreateOrConnectWithoutShowsInput {
  @TypeGraphQL.Field(_type => RatingWhereUniqueInput, {
    nullable: false
  })
  where!: RatingWhereUniqueInput;

  @TypeGraphQL.Field(_type => RatingCreateWithoutShowsInput, {
    nullable: false
  })
  create!: RatingCreateWithoutShowsInput;
}
