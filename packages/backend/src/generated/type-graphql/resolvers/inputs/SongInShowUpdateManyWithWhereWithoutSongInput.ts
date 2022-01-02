import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongInShowScalarWhereInput } from "../inputs/SongInShowScalarWhereInput";
import { SongInShowUpdateManyMutationInput } from "../inputs/SongInShowUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SongInShowUpdateManyWithWhereWithoutSongInput {
  @TypeGraphQL.Field(_type => SongInShowScalarWhereInput, {
    nullable: false
  })
  where!: SongInShowScalarWhereInput;

  @TypeGraphQL.Field(_type => SongInShowUpdateManyMutationInput, {
    nullable: false
  })
  data!: SongInShowUpdateManyMutationInput;
}
