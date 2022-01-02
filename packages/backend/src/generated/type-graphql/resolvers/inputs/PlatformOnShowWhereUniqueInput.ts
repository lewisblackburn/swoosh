import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlatformOnShowPlatformIdShowIdCompoundUniqueInput } from "../inputs/PlatformOnShowPlatformIdShowIdCompoundUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PlatformOnShowWhereUniqueInput {
  @TypeGraphQL.Field(_type => PlatformOnShowPlatformIdShowIdCompoundUniqueInput, {
    nullable: true
  })
  platformId_showId?: PlatformOnShowPlatformIdShowIdCompoundUniqueInput | undefined;
}
