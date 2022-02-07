import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongLikeScalarWhereInput } from "../inputs/SongLikeScalarWhereInput";
import { SongLikeUpdateManyMutationInput } from "../inputs/SongLikeUpdateManyMutationInput";

@TypeGraphQL.InputType("SongLikeUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true
})
export class SongLikeUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => SongLikeScalarWhereInput, {
    nullable: false
  })
  where!: SongLikeScalarWhereInput;

  @TypeGraphQL.Field(_type => SongLikeUpdateManyMutationInput, {
    nullable: false
  })
  data!: SongLikeUpdateManyMutationInput;
}
