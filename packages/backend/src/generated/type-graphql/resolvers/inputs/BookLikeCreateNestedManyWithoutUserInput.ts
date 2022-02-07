import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookLikeCreateManyUserInputEnvelope } from "../inputs/BookLikeCreateManyUserInputEnvelope";
import { BookLikeCreateOrConnectWithoutUserInput } from "../inputs/BookLikeCreateOrConnectWithoutUserInput";
import { BookLikeCreateWithoutUserInput } from "../inputs/BookLikeCreateWithoutUserInput";
import { BookLikeWhereUniqueInput } from "../inputs/BookLikeWhereUniqueInput";

@TypeGraphQL.InputType("BookLikeCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class BookLikeCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [BookLikeCreateWithoutUserInput], {
    nullable: true
  })
  create?: BookLikeCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookLikeCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: BookLikeCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => BookLikeCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: BookLikeCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BookLikeWhereUniqueInput], {
    nullable: true
  })
  connect?: BookLikeWhereUniqueInput[] | undefined;
}
