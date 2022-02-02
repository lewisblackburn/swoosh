import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutLikedMoviesInput } from "../inputs/UserCreateNestedOneWithoutLikedMoviesInput";

@TypeGraphQL.InputType("MovieLikeCreateWithoutMovieInput", {
  isAbstract: true
})
export class MovieLikeCreateWithoutMovieInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutLikedMoviesInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutLikedMoviesInput;
}
