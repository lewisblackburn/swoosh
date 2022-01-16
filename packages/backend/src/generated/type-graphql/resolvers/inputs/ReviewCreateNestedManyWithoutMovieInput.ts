import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReviewCreateManyMovieInputEnvelope } from "../inputs/ReviewCreateManyMovieInputEnvelope";
import { ReviewCreateOrConnectWithoutMovieInput } from "../inputs/ReviewCreateOrConnectWithoutMovieInput";
import { ReviewCreateWithoutMovieInput } from "../inputs/ReviewCreateWithoutMovieInput";
import { ReviewWhereUniqueInput } from "../inputs/ReviewWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReviewCreateNestedManyWithoutMovieInput {
  @TypeGraphQL.Field(_type => [ReviewCreateWithoutMovieInput], {
    nullable: true
  })
  create?: ReviewCreateWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReviewCreateOrConnectWithoutMovieInput], {
    nullable: true
  })
  connectOrCreate?: ReviewCreateOrConnectWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => ReviewCreateManyMovieInputEnvelope, {
    nullable: true
  })
  createMany?: ReviewCreateManyMovieInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ReviewWhereUniqueInput], {
    nullable: true
  })
  connect?: ReviewWhereUniqueInput[] | undefined;
}
