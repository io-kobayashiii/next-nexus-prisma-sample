import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: string;
};

export type DeleteUserResponse = {
  __typename?: 'DeleteUserResponse';
  deletedUser?: Maybe<UserType>;
  message?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser?: Maybe<UserType>;
  deleteUser?: Maybe<DeleteUserResponse>;
  updateUser?: Maybe<UpdateUserResponse>;
};


export type MutationCreateUserArgs = {
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};


export type MutationDeleteUserArgs = {
  email: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  email: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  users?: Maybe<Array<Maybe<UserType>>>;
};

export type UpdateUserResponse = {
  __typename?: 'UpdateUserResponse';
  message?: Maybe<Scalars['String']>;
  updatedUser?: Maybe<UserType>;
};

export type UserType = {
  __typename?: 'UserType';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users?: Array<{ __typename?: 'UserType', id: number, email: string, name: string, createdAt: string, updatedAt: string } | null> | null };

export type CreateUserMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  name: Scalars['String'];
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'UserType', id: number, email: string, name: string } | null };

export type UpdateUserMutationVariables = Exact<{
  email: Scalars['String'];
  password?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser?: { __typename?: 'UpdateUserResponse', message?: string | null, updatedUser?: { __typename?: 'UserType', id: number, email: string, name: string } | null } | null };

export type DeleteUserMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser?: { __typename?: 'DeleteUserResponse', message?: string | null, deletedUser?: { __typename?: 'UserType', id: number, email: string, name: string } | null } | null };


export const UsersDocument = gql`
    query Users {
  users {
    id
    email
    name
    createdAt
    updatedAt
  }
}
    `;

export function useUsersQuery(options?: Omit<Urql.UseQueryArgs<UsersQueryVariables>, 'query'>) {
  return Urql.useQuery<UsersQuery, UsersQueryVariables>({ query: UsersDocument, ...options });
};
export const CreateUserDocument = gql`
    mutation CreateUser($email: String!, $password: String!, $name: String!) {
  createUser(email: $email, password: $password, name: $name) {
    id
    email
    name
  }
}
    `;

export function useCreateUserMutation() {
  return Urql.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument);
};
export const UpdateUserDocument = gql`
    mutation UpdateUser($email: String!, $password: String, $name: String) {
  updateUser(email: $email, password: $password, name: $name) {
    updatedUser {
      id
      email
      name
    }
    message
  }
}
    `;

export function useUpdateUserMutation() {
  return Urql.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument);
};
export const DeleteUserDocument = gql`
    mutation DeleteUser($email: String!) {
  deleteUser(email: $email) {
    deletedUser {
      id
      email
      name
    }
    message
  }
}
    `;

export function useDeleteUserMutation() {
  return Urql.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument);
};