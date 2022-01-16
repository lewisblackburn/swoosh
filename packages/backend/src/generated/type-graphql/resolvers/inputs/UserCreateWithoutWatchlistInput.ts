import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FavouriteCreateNestedOneWithoutUserInput } from "../inputs/FavouriteCreateNestedOneWithoutUserInput";
import { FollowsCreateNestedManyWithoutFollowerInput } from "../inputs/FollowsCreateNestedManyWithoutFollowerInput";
import { FollowsCreateNestedManyWithoutFollowingInput } from "../inputs/FollowsCreateNestedManyWithoutFollowingInput";
import { NotificationCreateNestedManyWithoutUserInput } from "../inputs/NotificationCreateNestedManyWithoutUserInput";
import { ReviewCreateNestedManyWithoutUserInput } from "../inputs/ReviewCreateNestedManyWithoutUserInput";
import { VoteCreateNestedManyWithoutUserInput } from "../inputs/VoteCreateNestedManyWithoutUserInput";
import { Role } from "../../enums/Role";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateWithoutWatchlistInput {
  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  confirmed?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  username!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  displayname!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => Role, {
    nullable: true
  })
  role?: "USER" | "ADMIN" | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  avatar?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  bio?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  location?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  website?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dob?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => FollowsCreateNestedManyWithoutFollowingInput, {
    nullable: true
  })
  following?: FollowsCreateNestedManyWithoutFollowingInput | undefined;

  @TypeGraphQL.Field(_type => FollowsCreateNestedManyWithoutFollowerInput, {
    nullable: true
  })
  followers?: FollowsCreateNestedManyWithoutFollowerInput | undefined;

  @TypeGraphQL.Field(_type => NotificationCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  notifications?: NotificationCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => FavouriteCreateNestedOneWithoutUserInput, {
    nullable: true
  })
  favourites?: FavouriteCreateNestedOneWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => ReviewCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  reviews?: ReviewCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => VoteCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  Vote?: VoteCreateNestedManyWithoutUserInput | undefined;
}
