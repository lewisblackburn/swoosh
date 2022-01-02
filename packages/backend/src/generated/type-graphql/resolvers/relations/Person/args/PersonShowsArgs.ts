import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActorInShowOrderByWithRelationInput } from "../../../inputs/ActorInShowOrderByWithRelationInput";
import { ActorInShowWhereInput } from "../../../inputs/ActorInShowWhereInput";
import { ActorInShowWhereUniqueInput } from "../../../inputs/ActorInShowWhereUniqueInput";
import { ActorInShowScalarFieldEnum } from "../../../../enums/ActorInShowScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class PersonShowsArgs {
  @TypeGraphQL.Field(_type => ActorInShowWhereInput, {
    nullable: true
  })
  where?: ActorInShowWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ActorInShowOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ActorInShowOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ActorInShowWhereUniqueInput, {
    nullable: true
  })
  cursor?: ActorInShowWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ActorInShowScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"showId" | "personId" | "role"> | undefined;
}
