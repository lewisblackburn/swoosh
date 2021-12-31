import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowsCreateManyFollowingInput } from "../inputs/FollowsCreateManyFollowingInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FollowsCreateManyFollowingInputEnvelope {
  @TypeGraphQL.Field(_type => [FollowsCreateManyFollowingInput], {
    nullable: false
  })
  data!: FollowsCreateManyFollowingInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
