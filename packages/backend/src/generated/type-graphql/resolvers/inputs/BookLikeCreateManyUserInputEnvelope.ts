import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookLikeCreateManyUserInput } from "../inputs/BookLikeCreateManyUserInput";

@TypeGraphQL.InputType("BookLikeCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class BookLikeCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [BookLikeCreateManyUserInput], {
    nullable: false
  })
  data!: BookLikeCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
