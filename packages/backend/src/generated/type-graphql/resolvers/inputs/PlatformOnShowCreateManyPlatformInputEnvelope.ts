import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlatformOnShowCreateManyPlatformInput } from "../inputs/PlatformOnShowCreateManyPlatformInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PlatformOnShowCreateManyPlatformInputEnvelope {
  @TypeGraphQL.Field(_type => [PlatformOnShowCreateManyPlatformInput], {
    nullable: false
  })
  data!: PlatformOnShowCreateManyPlatformInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
