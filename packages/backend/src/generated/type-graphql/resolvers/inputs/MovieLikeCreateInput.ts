import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateNestedOneWithoutLikesInput } from "../inputs/MovieCreateNestedOneWithoutLikesInput";
import { UserCreateNestedOneWithoutLikedMoviesInput } from "../inputs/UserCreateNestedOneWithoutLikedMoviesInput";

@TypeGraphQL.InputType("MovieLikeCreateInput", {
  isAbstract: true
})
export class MovieLikeCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutLikedMoviesInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutLikedMoviesInput;

  @TypeGraphQL.Field(_type => MovieCreateNestedOneWithoutLikesInput, {
    nullable: false
  })
  movie!: MovieCreateNestedOneWithoutLikesInput;
}
