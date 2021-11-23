import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateNestedOneWithoutSongsInput } from "../inputs/PersonCreateNestedOneWithoutSongsInput";
import { UserCreateNestedOneWithoutSongsInput } from "../inputs/UserCreateNestedOneWithoutSongsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SongCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutSongsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutSongsInput;

  @TypeGraphQL.Field(_type => PersonCreateNestedOneWithoutSongsInput, {
    nullable: false
  })
  artist!: PersonCreateNestedOneWithoutSongsInput;
}
