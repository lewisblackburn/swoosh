import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongLikeCreateManyInput } from "../../../inputs/SongLikeCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySongLikeArgs {
  @TypeGraphQL.Field(_type => [SongLikeCreateManyInput], {
    nullable: false
  })
  data!: SongLikeCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
