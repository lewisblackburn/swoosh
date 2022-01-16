import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumRoleFieldUpdateOperationsInput } from "../inputs/EnumRoleFieldUpdateOperationsInput";
import { FavouriteUpdateOneWithoutUserInput } from "../inputs/FavouriteUpdateOneWithoutUserInput";
import { FollowsUpdateManyWithoutFollowingInput } from "../inputs/FollowsUpdateManyWithoutFollowingInput";
import { NotificationUpdateManyWithoutUserInput } from "../inputs/NotificationUpdateManyWithoutUserInput";
import { ReviewUpdateManyWithoutUserInput } from "../inputs/ReviewUpdateManyWithoutUserInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { VoteUpdateManyWithoutUserInput } from "../inputs/VoteUpdateManyWithoutUserInput";
import { WatchlistUpdateOneWithoutUserInput } from "../inputs/WatchlistUpdateOneWithoutUserInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateWithoutFollowersInput {
  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  confirmed?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  username?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  displayname?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  password?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumRoleFieldUpdateOperationsInput, {
    nullable: true
  })
  role?: EnumRoleFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  avatar?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  bio?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  location?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  website?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  dob?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FollowsUpdateManyWithoutFollowingInput, {
    nullable: true
  })
  following?: FollowsUpdateManyWithoutFollowingInput | undefined;

  @TypeGraphQL.Field(_type => NotificationUpdateManyWithoutUserInput, {
    nullable: true
  })
  notifications?: NotificationUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => WatchlistUpdateOneWithoutUserInput, {
    nullable: true
  })
  watchlist?: WatchlistUpdateOneWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => FavouriteUpdateOneWithoutUserInput, {
    nullable: true
  })
  favourites?: FavouriteUpdateOneWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => ReviewUpdateManyWithoutUserInput, {
    nullable: true
  })
  reviews?: ReviewUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => VoteUpdateManyWithoutUserInput, {
    nullable: true
  })
  Vote?: VoteUpdateManyWithoutUserInput | undefined;
}
