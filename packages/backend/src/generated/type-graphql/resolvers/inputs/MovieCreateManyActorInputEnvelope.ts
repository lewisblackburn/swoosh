import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateManyActorInput } from "../inputs/MovieCreateManyActorInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MovieCreateManyActorInputEnvelope {
  @TypeGraphQL.Field(_type => [MovieCreateManyActorInput], {
    nullable: false
  })
  data!: MovieCreateManyActorInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
