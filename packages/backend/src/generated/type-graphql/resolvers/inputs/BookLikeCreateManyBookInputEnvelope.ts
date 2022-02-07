import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookLikeCreateManyBookInput } from "../inputs/BookLikeCreateManyBookInput";

@TypeGraphQL.InputType("BookLikeCreateManyBookInputEnvelope", {
  isAbstract: true
})
export class BookLikeCreateManyBookInputEnvelope {
  @TypeGraphQL.Field(_type => [BookLikeCreateManyBookInput], {
    nullable: false
  })
  data!: BookLikeCreateManyBookInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
