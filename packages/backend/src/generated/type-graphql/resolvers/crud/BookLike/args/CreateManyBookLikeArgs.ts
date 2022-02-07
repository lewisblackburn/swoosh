import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookLikeCreateManyInput } from "../../../inputs/BookLikeCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyBookLikeArgs {
  @TypeGraphQL.Field(_type => [BookLikeCreateManyInput], {
    nullable: false
  })
  data!: BookLikeCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
