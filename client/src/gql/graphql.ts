/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Time: { input: any; output: any; }
};

export type Mutation = {
  __typename?: 'Mutation';
  createPaste: Paste;
};


export type MutationCreatePasteArgs = {
  input: NewPaste;
};

export type NewPaste = {
  content: Scalars['String']['input'];
  language?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type Paste = {
  __typename?: 'Paste';
  author: Scalars['String']['output'];
  content: Scalars['String']['output'];
  createdAt: Scalars['Time']['output'];
  id: Scalars['ID']['output'];
  language?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  accessUser: User;
  paste: Paste;
};


export type QueryPasteArgs = {
  id: Scalars['ID']['input'];
};

export type User = {
  __typename?: 'User';
  traPId: Scalars['ID']['output'];
};

export type GetAccessUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAccessUserQuery = { __typename?: 'Query', accessUser: { __typename?: 'User', traPId: string } };


export const GetAccessUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAccessUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"traPId"}}]}}]}}]} as unknown as DocumentNode<GetAccessUserQuery, GetAccessUserQueryVariables>;