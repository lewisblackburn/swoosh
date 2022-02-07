import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookLikeUpdateManyMutationInput } from "../../../inputs/BookLikeUpdateManyMutationInput";
import { BookLikeWhereInput } from "../../../inputs/BookLikeWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyBookLikeArgs {
  @TypeGraphQL.Field(_type => BookLikeUpdateManyMutationInput, {
    nullable: false
  })
  data!: BookLikeUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => BookLikeWhereInput, {
    nullable: true
  })
  where?: BookLikeWhereInput | undefined;
}
