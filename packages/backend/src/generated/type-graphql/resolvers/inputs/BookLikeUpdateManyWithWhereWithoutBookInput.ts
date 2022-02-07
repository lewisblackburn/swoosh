import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookLikeScalarWhereInput } from "../inputs/BookLikeScalarWhereInput";
import { BookLikeUpdateManyMutationInput } from "../inputs/BookLikeUpdateManyMutationInput";

@TypeGraphQL.InputType("BookLikeUpdateManyWithWhereWithoutBookInput", {
  isAbstract: true
})
export class BookLikeUpdateManyWithWhereWithoutBookInput {
  @TypeGraphQL.Field(_type => BookLikeScalarWhereInput, {
    nullable: false
  })
  where!: BookLikeScalarWhereInput;

  @TypeGraphQL.Field(_type => BookLikeUpdateManyMutationInput, {
    nullable: false
  })
  data!: BookLikeUpdateManyMutationInput;
}
