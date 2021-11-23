import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateNestedManyWithoutAuthorInput } from "../inputs/BookCreateNestedManyWithoutAuthorInput";
import { MovieCreateNestedManyWithoutActorInput } from "../inputs/MovieCreateNestedManyWithoutActorInput";
import { Career } from "../../enums/Career";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PersonCreateWithoutSongsInput {
  @TypeGraphQL.Field(_type => Career, {
    nullable: false
  })
  type!: "AUTHOR" | "ARTIST" | "ACTOR";

  @TypeGraphQL.Field(_type => BookCreateNestedManyWithoutAuthorInput, {
    nullable: true
  })
  books?: BookCreateNestedManyWithoutAuthorInput | undefined;

  @TypeGraphQL.Field(_type => MovieCreateNestedManyWithoutActorInput, {
    nullable: true
  })
  movies?: MovieCreateNestedManyWithoutActorInput | undefined;
}
