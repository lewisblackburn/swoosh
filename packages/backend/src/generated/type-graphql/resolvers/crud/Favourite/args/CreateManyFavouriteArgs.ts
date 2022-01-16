import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FavouriteCreateManyInput } from "../../../inputs/FavouriteCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyFavouriteArgs {
  @TypeGraphQL.Field(_type => [FavouriteCreateManyInput], {
    nullable: false
  })
  data!: FavouriteCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
