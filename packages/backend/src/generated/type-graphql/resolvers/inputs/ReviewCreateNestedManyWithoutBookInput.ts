import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReviewCreateManyBookInputEnvelope } from "../inputs/ReviewCreateManyBookInputEnvelope";
import { ReviewCreateOrConnectWithoutBookInput } from "../inputs/ReviewCreateOrConnectWithoutBookInput";
import { ReviewCreateWithoutBookInput } from "../inputs/ReviewCreateWithoutBookInput";
import { ReviewWhereUniqueInput } from "../inputs/ReviewWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReviewCreateNestedManyWithoutBookInput {
  @TypeGraphQL.Field(_type => [ReviewCreateWithoutBookInput], {
    nullable: true
  })
  create?: ReviewCreateWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReviewCreateOrConnectWithoutBookInput], {
    nullable: true
  })
  connectOrCreate?: ReviewCreateOrConnectWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(_type => ReviewCreateManyBookInputEnvelope, {
    nullable: true
  })
  createMany?: ReviewCreateManyBookInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ReviewWhereUniqueInput], {
    nullable: true
  })
  connect?: ReviewWhereUniqueInput[] | undefined;
}
