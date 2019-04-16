// Code generated by Prisma (prisma@1.30.1). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  entry: (where?: EntryWhereInput) => Promise<boolean>;
  gif: (where?: GifWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  entry: (where: EntryWhereUniqueInput) => EntryPromise;
  entries: (
    args?: {
      where?: EntryWhereInput;
      orderBy?: EntryOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Entry>;
  entriesConnection: (
    args?: {
      where?: EntryWhereInput;
      orderBy?: EntryOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => EntryConnectionPromise;
  gif: (where: GifWhereUniqueInput) => GifPromise;
  gifs: (
    args?: {
      where?: GifWhereInput;
      orderBy?: GifOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Gif>;
  gifsConnection: (
    args?: {
      where?: GifWhereInput;
      orderBy?: GifOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => GifConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserPromise;
  users: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<User>;
  usersConnection: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createEntry: (data: EntryCreateInput) => EntryPromise;
  updateEntry: (
    args: { data: EntryUpdateInput; where: EntryWhereUniqueInput }
  ) => EntryPromise;
  updateManyEntries: (
    args: { data: EntryUpdateManyMutationInput; where?: EntryWhereInput }
  ) => BatchPayloadPromise;
  upsertEntry: (
    args: {
      where: EntryWhereUniqueInput;
      create: EntryCreateInput;
      update: EntryUpdateInput;
    }
  ) => EntryPromise;
  deleteEntry: (where: EntryWhereUniqueInput) => EntryPromise;
  deleteManyEntries: (where?: EntryWhereInput) => BatchPayloadPromise;
  createGif: (data: GifCreateInput) => GifPromise;
  updateGif: (
    args: { data: GifUpdateInput; where: GifWhereUniqueInput }
  ) => GifPromise;
  updateManyGifs: (
    args: { data: GifUpdateManyMutationInput; where?: GifWhereInput }
  ) => BatchPayloadPromise;
  upsertGif: (
    args: {
      where: GifWhereUniqueInput;
      create: GifCreateInput;
      update: GifUpdateInput;
    }
  ) => GifPromise;
  deleteGif: (where: GifWhereUniqueInput) => GifPromise;
  deleteManyGifs: (where?: GifWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (
    args: { data: UserUpdateInput; where: UserWhereUniqueInput }
  ) => UserPromise;
  updateManyUsers: (
    args: { data: UserUpdateManyMutationInput; where?: UserWhereInput }
  ) => BatchPayloadPromise;
  upsertUser: (
    args: {
      where: UserWhereUniqueInput;
      create: UserCreateInput;
      update: UserUpdateInput;
    }
  ) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  entry: (
    where?: EntrySubscriptionWhereInput
  ) => EntrySubscriptionPayloadSubscription;
  gif: (
    where?: GifSubscriptionWhereInput
  ) => GifSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type EntryOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "productivity_ASC"
  | "productivity_DESC"
  | "positivity_ASC"
  | "positivity_DESC";

export type GifOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "url_ASC"
  | "url_DESC"
  | "width_ASC"
  | "width_DESC"
  | "height_ASC"
  | "height_DESC"
  | "giphyId_ASC"
  | "giphyId_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "name_ASC"
  | "name_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type EntryWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface EntryWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  createdAt?: DateTimeInput;
  createdAt_not?: DateTimeInput;
  createdAt_in?: DateTimeInput[] | DateTimeInput;
  createdAt_not_in?: DateTimeInput[] | DateTimeInput;
  createdAt_lt?: DateTimeInput;
  createdAt_lte?: DateTimeInput;
  createdAt_gt?: DateTimeInput;
  createdAt_gte?: DateTimeInput;
  updatedAt?: DateTimeInput;
  updatedAt_not?: DateTimeInput;
  updatedAt_in?: DateTimeInput[] | DateTimeInput;
  updatedAt_not_in?: DateTimeInput[] | DateTimeInput;
  updatedAt_lt?: DateTimeInput;
  updatedAt_lte?: DateTimeInput;
  updatedAt_gt?: DateTimeInput;
  updatedAt_gte?: DateTimeInput;
  user?: UserWhereInput;
  gif?: GifWhereInput;
  productivity?: Float;
  productivity_not?: Float;
  productivity_in?: Float[] | Float;
  productivity_not_in?: Float[] | Float;
  productivity_lt?: Float;
  productivity_lte?: Float;
  productivity_gt?: Float;
  productivity_gte?: Float;
  positivity?: Float;
  positivity_not?: Float;
  positivity_in?: Float[] | Float;
  positivity_not_in?: Float[] | Float;
  positivity_lt?: Float;
  positivity_lte?: Float;
  positivity_gt?: Float;
  positivity_gte?: Float;
  AND?: EntryWhereInput[] | EntryWhereInput;
  OR?: EntryWhereInput[] | EntryWhereInput;
  NOT?: EntryWhereInput[] | EntryWhereInput;
}

export interface UserWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  createdAt?: DateTimeInput;
  createdAt_not?: DateTimeInput;
  createdAt_in?: DateTimeInput[] | DateTimeInput;
  createdAt_not_in?: DateTimeInput[] | DateTimeInput;
  createdAt_lt?: DateTimeInput;
  createdAt_lte?: DateTimeInput;
  createdAt_gt?: DateTimeInput;
  createdAt_gte?: DateTimeInput;
  updatedAt?: DateTimeInput;
  updatedAt_not?: DateTimeInput;
  updatedAt_in?: DateTimeInput[] | DateTimeInput;
  updatedAt_not_in?: DateTimeInput[] | DateTimeInput;
  updatedAt_lt?: DateTimeInput;
  updatedAt_lte?: DateTimeInput;
  updatedAt_gt?: DateTimeInput;
  updatedAt_gte?: DateTimeInput;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  entries_every?: EntryWhereInput;
  entries_some?: EntryWhereInput;
  entries_none?: EntryWhereInput;
  AND?: UserWhereInput[] | UserWhereInput;
  OR?: UserWhereInput[] | UserWhereInput;
  NOT?: UserWhereInput[] | UserWhereInput;
}

export interface GifWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  createdAt?: DateTimeInput;
  createdAt_not?: DateTimeInput;
  createdAt_in?: DateTimeInput[] | DateTimeInput;
  createdAt_not_in?: DateTimeInput[] | DateTimeInput;
  createdAt_lt?: DateTimeInput;
  createdAt_lte?: DateTimeInput;
  createdAt_gt?: DateTimeInput;
  createdAt_gte?: DateTimeInput;
  updatedAt?: DateTimeInput;
  updatedAt_not?: DateTimeInput;
  updatedAt_in?: DateTimeInput[] | DateTimeInput;
  updatedAt_not_in?: DateTimeInput[] | DateTimeInput;
  updatedAt_lt?: DateTimeInput;
  updatedAt_lte?: DateTimeInput;
  updatedAt_gt?: DateTimeInput;
  updatedAt_gte?: DateTimeInput;
  url?: String;
  url_not?: String;
  url_in?: String[] | String;
  url_not_in?: String[] | String;
  url_lt?: String;
  url_lte?: String;
  url_gt?: String;
  url_gte?: String;
  url_contains?: String;
  url_not_contains?: String;
  url_starts_with?: String;
  url_not_starts_with?: String;
  url_ends_with?: String;
  url_not_ends_with?: String;
  width?: String;
  width_not?: String;
  width_in?: String[] | String;
  width_not_in?: String[] | String;
  width_lt?: String;
  width_lte?: String;
  width_gt?: String;
  width_gte?: String;
  width_contains?: String;
  width_not_contains?: String;
  width_starts_with?: String;
  width_not_starts_with?: String;
  width_ends_with?: String;
  width_not_ends_with?: String;
  height?: String;
  height_not?: String;
  height_in?: String[] | String;
  height_not_in?: String[] | String;
  height_lt?: String;
  height_lte?: String;
  height_gt?: String;
  height_gte?: String;
  height_contains?: String;
  height_not_contains?: String;
  height_starts_with?: String;
  height_not_starts_with?: String;
  height_ends_with?: String;
  height_not_ends_with?: String;
  giphyId?: String;
  giphyId_not?: String;
  giphyId_in?: String[] | String;
  giphyId_not_in?: String[] | String;
  giphyId_lt?: String;
  giphyId_lte?: String;
  giphyId_gt?: String;
  giphyId_gte?: String;
  giphyId_contains?: String;
  giphyId_not_contains?: String;
  giphyId_starts_with?: String;
  giphyId_not_starts_with?: String;
  giphyId_ends_with?: String;
  giphyId_not_ends_with?: String;
  entry?: EntryWhereInput;
  AND?: GifWhereInput[] | GifWhereInput;
  OR?: GifWhereInput[] | GifWhereInput;
  NOT?: GifWhereInput[] | GifWhereInput;
}

export type GifWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export type UserWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  name?: String;
}>;

export interface EntryCreateInput {
  user: UserCreateOneWithoutEntriesInput;
  gif: GifCreateOneWithoutEntryInput;
  productivity: Float;
  positivity: Float;
}

export interface UserCreateOneWithoutEntriesInput {
  create?: UserCreateWithoutEntriesInput;
  connect?: UserWhereUniqueInput;
}

export interface UserCreateWithoutEntriesInput {
  name: String;
}

export interface GifCreateOneWithoutEntryInput {
  create?: GifCreateWithoutEntryInput;
  connect?: GifWhereUniqueInput;
}

export interface GifCreateWithoutEntryInput {
  url: String;
  width?: String;
  height?: String;
  giphyId?: String;
}

export interface EntryUpdateInput {
  user?: UserUpdateOneRequiredWithoutEntriesInput;
  gif?: GifUpdateOneRequiredWithoutEntryInput;
  productivity?: Float;
  positivity?: Float;
}

export interface UserUpdateOneRequiredWithoutEntriesInput {
  create?: UserCreateWithoutEntriesInput;
  update?: UserUpdateWithoutEntriesDataInput;
  upsert?: UserUpsertWithoutEntriesInput;
  connect?: UserWhereUniqueInput;
}

export interface UserUpdateWithoutEntriesDataInput {
  name?: String;
}

export interface UserUpsertWithoutEntriesInput {
  update: UserUpdateWithoutEntriesDataInput;
  create: UserCreateWithoutEntriesInput;
}

export interface GifUpdateOneRequiredWithoutEntryInput {
  create?: GifCreateWithoutEntryInput;
  update?: GifUpdateWithoutEntryDataInput;
  upsert?: GifUpsertWithoutEntryInput;
  connect?: GifWhereUniqueInput;
}

export interface GifUpdateWithoutEntryDataInput {
  url?: String;
  width?: String;
  height?: String;
  giphyId?: String;
}

export interface GifUpsertWithoutEntryInput {
  update: GifUpdateWithoutEntryDataInput;
  create: GifCreateWithoutEntryInput;
}

export interface EntryUpdateManyMutationInput {
  productivity?: Float;
  positivity?: Float;
}

export interface GifCreateInput {
  url: String;
  width?: String;
  height?: String;
  giphyId?: String;
  entry: EntryCreateOneWithoutGifInput;
}

export interface EntryCreateOneWithoutGifInput {
  create?: EntryCreateWithoutGifInput;
  connect?: EntryWhereUniqueInput;
}

export interface EntryCreateWithoutGifInput {
  user: UserCreateOneWithoutEntriesInput;
  productivity: Float;
  positivity: Float;
}

export interface GifUpdateInput {
  url?: String;
  width?: String;
  height?: String;
  giphyId?: String;
  entry?: EntryUpdateOneRequiredWithoutGifInput;
}

export interface EntryUpdateOneRequiredWithoutGifInput {
  create?: EntryCreateWithoutGifInput;
  update?: EntryUpdateWithoutGifDataInput;
  upsert?: EntryUpsertWithoutGifInput;
  connect?: EntryWhereUniqueInput;
}

export interface EntryUpdateWithoutGifDataInput {
  user?: UserUpdateOneRequiredWithoutEntriesInput;
  productivity?: Float;
  positivity?: Float;
}

export interface EntryUpsertWithoutGifInput {
  update: EntryUpdateWithoutGifDataInput;
  create: EntryCreateWithoutGifInput;
}

export interface GifUpdateManyMutationInput {
  url?: String;
  width?: String;
  height?: String;
  giphyId?: String;
}

export interface UserCreateInput {
  name: String;
  entries?: EntryCreateManyWithoutUserInput;
}

export interface EntryCreateManyWithoutUserInput {
  create?: EntryCreateWithoutUserInput[] | EntryCreateWithoutUserInput;
  connect?: EntryWhereUniqueInput[] | EntryWhereUniqueInput;
}

export interface EntryCreateWithoutUserInput {
  gif: GifCreateOneWithoutEntryInput;
  productivity: Float;
  positivity: Float;
}

export interface UserUpdateInput {
  name?: String;
  entries?: EntryUpdateManyWithoutUserInput;
}

export interface EntryUpdateManyWithoutUserInput {
  create?: EntryCreateWithoutUserInput[] | EntryCreateWithoutUserInput;
  delete?: EntryWhereUniqueInput[] | EntryWhereUniqueInput;
  connect?: EntryWhereUniqueInput[] | EntryWhereUniqueInput;
  set?: EntryWhereUniqueInput[] | EntryWhereUniqueInput;
  disconnect?: EntryWhereUniqueInput[] | EntryWhereUniqueInput;
  update?:
    | EntryUpdateWithWhereUniqueWithoutUserInput[]
    | EntryUpdateWithWhereUniqueWithoutUserInput;
  upsert?:
    | EntryUpsertWithWhereUniqueWithoutUserInput[]
    | EntryUpsertWithWhereUniqueWithoutUserInput;
  deleteMany?: EntryScalarWhereInput[] | EntryScalarWhereInput;
  updateMany?:
    | EntryUpdateManyWithWhereNestedInput[]
    | EntryUpdateManyWithWhereNestedInput;
}

export interface EntryUpdateWithWhereUniqueWithoutUserInput {
  where: EntryWhereUniqueInput;
  data: EntryUpdateWithoutUserDataInput;
}

export interface EntryUpdateWithoutUserDataInput {
  gif?: GifUpdateOneRequiredWithoutEntryInput;
  productivity?: Float;
  positivity?: Float;
}

export interface EntryUpsertWithWhereUniqueWithoutUserInput {
  where: EntryWhereUniqueInput;
  update: EntryUpdateWithoutUserDataInput;
  create: EntryCreateWithoutUserInput;
}

export interface EntryScalarWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  createdAt?: DateTimeInput;
  createdAt_not?: DateTimeInput;
  createdAt_in?: DateTimeInput[] | DateTimeInput;
  createdAt_not_in?: DateTimeInput[] | DateTimeInput;
  createdAt_lt?: DateTimeInput;
  createdAt_lte?: DateTimeInput;
  createdAt_gt?: DateTimeInput;
  createdAt_gte?: DateTimeInput;
  updatedAt?: DateTimeInput;
  updatedAt_not?: DateTimeInput;
  updatedAt_in?: DateTimeInput[] | DateTimeInput;
  updatedAt_not_in?: DateTimeInput[] | DateTimeInput;
  updatedAt_lt?: DateTimeInput;
  updatedAt_lte?: DateTimeInput;
  updatedAt_gt?: DateTimeInput;
  updatedAt_gte?: DateTimeInput;
  productivity?: Float;
  productivity_not?: Float;
  productivity_in?: Float[] | Float;
  productivity_not_in?: Float[] | Float;
  productivity_lt?: Float;
  productivity_lte?: Float;
  productivity_gt?: Float;
  productivity_gte?: Float;
  positivity?: Float;
  positivity_not?: Float;
  positivity_in?: Float[] | Float;
  positivity_not_in?: Float[] | Float;
  positivity_lt?: Float;
  positivity_lte?: Float;
  positivity_gt?: Float;
  positivity_gte?: Float;
  AND?: EntryScalarWhereInput[] | EntryScalarWhereInput;
  OR?: EntryScalarWhereInput[] | EntryScalarWhereInput;
  NOT?: EntryScalarWhereInput[] | EntryScalarWhereInput;
}

export interface EntryUpdateManyWithWhereNestedInput {
  where: EntryScalarWhereInput;
  data: EntryUpdateManyDataInput;
}

export interface EntryUpdateManyDataInput {
  productivity?: Float;
  positivity?: Float;
}

export interface UserUpdateManyMutationInput {
  name?: String;
}

export interface EntrySubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: EntryWhereInput;
  AND?: EntrySubscriptionWhereInput[] | EntrySubscriptionWhereInput;
  OR?: EntrySubscriptionWhereInput[] | EntrySubscriptionWhereInput;
  NOT?: EntrySubscriptionWhereInput[] | EntrySubscriptionWhereInput;
}

export interface GifSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: GifWhereInput;
  AND?: GifSubscriptionWhereInput[] | GifSubscriptionWhereInput;
  OR?: GifSubscriptionWhereInput[] | GifSubscriptionWhereInput;
  NOT?: GifSubscriptionWhereInput[] | GifSubscriptionWhereInput;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: UserWhereInput;
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Entry {
  id: ID_Output;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
  productivity: Float;
  positivity: Float;
}

export interface EntryPromise extends Promise<Entry>, Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  user: <T = UserPromise>() => T;
  gif: <T = GifPromise>() => T;
  productivity: () => Promise<Float>;
  positivity: () => Promise<Float>;
}

export interface EntrySubscription
  extends Promise<AsyncIterator<Entry>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  user: <T = UserSubscription>() => T;
  gif: <T = GifSubscription>() => T;
  productivity: () => Promise<AsyncIterator<Float>>;
  positivity: () => Promise<AsyncIterator<Float>>;
}

export interface User {
  id: ID_Output;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
  name: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  name: () => Promise<String>;
  entries: <T = FragmentableArray<Entry>>(
    args?: {
      where?: EntryWhereInput;
      orderBy?: EntryOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  name: () => Promise<AsyncIterator<String>>;
  entries: <T = Promise<AsyncIterator<EntrySubscription>>>(
    args?: {
      where?: EntryWhereInput;
      orderBy?: EntryOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface Gif {
  id: ID_Output;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
  url: String;
  width?: String;
  height?: String;
  giphyId?: String;
}

export interface GifPromise extends Promise<Gif>, Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  url: () => Promise<String>;
  width: () => Promise<String>;
  height: () => Promise<String>;
  giphyId: () => Promise<String>;
  entry: <T = EntryPromise>() => T;
}

export interface GifSubscription
  extends Promise<AsyncIterator<Gif>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  url: () => Promise<AsyncIterator<String>>;
  width: () => Promise<AsyncIterator<String>>;
  height: () => Promise<AsyncIterator<String>>;
  giphyId: () => Promise<AsyncIterator<String>>;
  entry: <T = EntrySubscription>() => T;
}

export interface EntryConnection {
  pageInfo: PageInfo;
  edges: EntryEdge[];
}

export interface EntryConnectionPromise
  extends Promise<EntryConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<EntryEdge>>() => T;
  aggregate: <T = AggregateEntryPromise>() => T;
}

export interface EntryConnectionSubscription
  extends Promise<AsyncIterator<EntryConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<EntryEdgeSubscription>>>() => T;
  aggregate: <T = AggregateEntrySubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface EntryEdge {
  node: Entry;
  cursor: String;
}

export interface EntryEdgePromise extends Promise<EntryEdge>, Fragmentable {
  node: <T = EntryPromise>() => T;
  cursor: () => Promise<String>;
}

export interface EntryEdgeSubscription
  extends Promise<AsyncIterator<EntryEdge>>,
    Fragmentable {
  node: <T = EntrySubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateEntry {
  count: Int;
}

export interface AggregateEntryPromise
  extends Promise<AggregateEntry>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateEntrySubscription
  extends Promise<AsyncIterator<AggregateEntry>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface GifConnection {
  pageInfo: PageInfo;
  edges: GifEdge[];
}

export interface GifConnectionPromise
  extends Promise<GifConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<GifEdge>>() => T;
  aggregate: <T = AggregateGifPromise>() => T;
}

export interface GifConnectionSubscription
  extends Promise<AsyncIterator<GifConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<GifEdgeSubscription>>>() => T;
  aggregate: <T = AggregateGifSubscription>() => T;
}

export interface GifEdge {
  node: Gif;
  cursor: String;
}

export interface GifEdgePromise extends Promise<GifEdge>, Fragmentable {
  node: <T = GifPromise>() => T;
  cursor: () => Promise<String>;
}

export interface GifEdgeSubscription
  extends Promise<AsyncIterator<GifEdge>>,
    Fragmentable {
  node: <T = GifSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateGif {
  count: Int;
}

export interface AggregateGifPromise
  extends Promise<AggregateGif>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateGifSubscription
  extends Promise<AsyncIterator<AggregateGif>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface EntrySubscriptionPayload {
  mutation: MutationType;
  node: Entry;
  updatedFields: String[];
  previousValues: EntryPreviousValues;
}

export interface EntrySubscriptionPayloadPromise
  extends Promise<EntrySubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = EntryPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = EntryPreviousValuesPromise>() => T;
}

export interface EntrySubscriptionPayloadSubscription
  extends Promise<AsyncIterator<EntrySubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = EntrySubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = EntryPreviousValuesSubscription>() => T;
}

export interface EntryPreviousValues {
  id: ID_Output;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
  productivity: Float;
  positivity: Float;
}

export interface EntryPreviousValuesPromise
  extends Promise<EntryPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  productivity: () => Promise<Float>;
  positivity: () => Promise<Float>;
}

export interface EntryPreviousValuesSubscription
  extends Promise<AsyncIterator<EntryPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  productivity: () => Promise<AsyncIterator<Float>>;
  positivity: () => Promise<AsyncIterator<Float>>;
}

export interface GifSubscriptionPayload {
  mutation: MutationType;
  node: Gif;
  updatedFields: String[];
  previousValues: GifPreviousValues;
}

export interface GifSubscriptionPayloadPromise
  extends Promise<GifSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = GifPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = GifPreviousValuesPromise>() => T;
}

export interface GifSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<GifSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = GifSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = GifPreviousValuesSubscription>() => T;
}

export interface GifPreviousValues {
  id: ID_Output;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
  url: String;
  width?: String;
  height?: String;
  giphyId?: String;
}

export interface GifPreviousValuesPromise
  extends Promise<GifPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  url: () => Promise<String>;
  width: () => Promise<String>;
  height: () => Promise<String>;
  giphyId: () => Promise<String>;
}

export interface GifPreviousValuesSubscription
  extends Promise<AsyncIterator<GifPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  url: () => Promise<AsyncIterator<String>>;
  width: () => Promise<AsyncIterator<String>>;
  height: () => Promise<AsyncIterator<String>>;
  giphyId: () => Promise<AsyncIterator<String>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface UserPreviousValues {
  id: ID_Output;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
  name: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  name: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  name: () => Promise<AsyncIterator<String>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Gif",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  },
  {
    name: "Entry",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
