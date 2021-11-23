import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutMoviesInput } from "../inputs/UserCreateOrConnectWithoutMoviesInput";
import { UserCreateWithoutMoviesInput } from "../inputs/UserCreateWithoutMoviesInput";
import { UserUpdateWithoutMoviesInput } from "../inputs/UserUpdateWithoutMoviesInput";
import { UserUpsertWithoutMoviesInput } from "../inputs/UserUpsertWithoutMoviesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutMoviesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutMoviesInput, {
    nullable: true
  })
  create?: UserCreateWithoutMoviesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutMoviesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutMoviesInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutMoviesInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutMoviesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutMoviesInput, {
    nullable: true
  })
  update?: UserUpdateWithoutMoviesInput | undefined;
}
