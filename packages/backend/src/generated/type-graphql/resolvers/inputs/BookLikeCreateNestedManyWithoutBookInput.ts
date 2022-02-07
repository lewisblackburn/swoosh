import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookLikeCreateManyBookInputEnvelope } from "../inputs/BookLikeCreateManyBookInputEnvelope";
import { BookLikeCreateOrConnectWithoutBookInput } from "../inputs/BookLikeCreateOrConnectWithoutBookInput";
import { BookLikeCreateWithoutBookInput } from "../inputs/BookLikeCreateWithoutBookInput";
import { BookLikeWhereUniqueInput } from "../inputs/BookLikeWhereUniqueInput";

@TypeGraphQL.InputType("BookLikeCreateNestedManyWithoutBookInput", {
  isAbstract: true
})
export class BookLikeCreateNestedManyWithoutBookInput {
  @TypeGraphQL.Field(_type => [BookLikeCreateWithoutBookInput], {
    nullable: true
  })
  create?: BookLikeCreateWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookLikeCreateOrConnectWithoutBookInput], {
    nullable: true
  })
  connectOrCreate?: BookLikeCreateOrConnectWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(_type => BookLikeCreateManyBookInputEnvelope, {
    nullable: true
  })
  createMany?: BookLikeCreateManyBookInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BookLikeWhereUniqueInput], {
    nullable: true
  })
  connect?: BookLikeWhereUniqueInput[] | undefined;
}
