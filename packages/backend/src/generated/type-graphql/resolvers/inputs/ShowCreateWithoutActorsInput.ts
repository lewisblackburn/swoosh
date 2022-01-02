import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlatformOnShowCreateNestedManyWithoutShowInput } from "../inputs/PlatformOnShowCreateNestedManyWithoutShowInput";
import { SongInShowCreateNestedManyWithoutShowInput } from "../inputs/SongInShowCreateNestedManyWithoutShowInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ShowCreateWithoutActorsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  thumbnail?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  locked?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  released?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => PlatformOnShowCreateNestedManyWithoutShowInput, {
    nullable: true
  })
  platforms?: PlatformOnShowCreateNestedManyWithoutShowInput | undefined;

  @TypeGraphQL.Field(_type => SongInShowCreateNestedManyWithoutShowInput, {
    nullable: true
  })
  soundtrack?: SongInShowCreateNestedManyWithoutShowInput | undefined;
}
