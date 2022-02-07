import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShowLikeOrderByWithRelationInput } from "../../../inputs/ShowLikeOrderByWithRelationInput";
import { ShowLikeWhereInput } from "../../../inputs/ShowLikeWhereInput";
import { ShowLikeWhereUniqueInput } from "../../../inputs/ShowLikeWhereUniqueInput";
import { ShowLikeScalarFieldEnum } from "../../../../enums/ShowLikeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class ShowLikesArgs {
  @TypeGraphQL.Field(_type => ShowLikeWhereInput, {
    nullable: true
  })
  where?: ShowLikeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ShowLikeOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ShowLikeOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ShowLikeWhereUniqueInput, {
    nullable: true
  })
  cursor?: ShowLikeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ShowLikeScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"userId" | "showId" | "createdAt"> | undefined;
}
