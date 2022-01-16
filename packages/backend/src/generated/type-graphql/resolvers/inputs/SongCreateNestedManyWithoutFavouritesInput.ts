import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateOrConnectWithoutFavouritesInput } from "../inputs/SongCreateOrConnectWithoutFavouritesInput";
import { SongCreateWithoutFavouritesInput } from "../inputs/SongCreateWithoutFavouritesInput";
import { SongWhereUniqueInput } from "../inputs/SongWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SongCreateNestedManyWithoutFavouritesInput {
  @TypeGraphQL.Field(_type => [SongCreateWithoutFavouritesInput], {
    nullable: true
  })
  create?: SongCreateWithoutFavouritesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongCreateOrConnectWithoutFavouritesInput], {
    nullable: true
  })
  connectOrCreate?: SongCreateOrConnectWithoutFavouritesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongWhereUniqueInput], {
    nullable: true
  })
  connect?: SongWhereUniqueInput[] | undefined;
}
