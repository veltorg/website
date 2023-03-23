/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  '\n  query GetPostsBySlug($slug: String!) {\n    posts: allPost(where: { slug: { current: { eq: $slug } } }) {\n      author {\n        givenName\n        familyName\n      }\n\n      headline\n      _createdAt\n      image {\n        _type\n        asset {\n          url\n        }\n        attribution\n        caption\n      }\n      articleBodyRaw\n    }\n  }\n':
    types.GetPostsBySlugDocument,
  '\n  query GetAllPostSlugs {\n    posts: allPost {\n      slug {\n        current\n      }\n    }\n  }\n':
    types.GetAllPostSlugsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query GetPostsBySlug($slug: String!) {\n    posts: allPost(where: { slug: { current: { eq: $slug } } }) {\n      author {\n        givenName\n        familyName\n      }\n\n      headline\n      _createdAt\n      image {\n        _type\n        asset {\n          url\n        }\n        attribution\n        caption\n      }\n      articleBodyRaw\n    }\n  }\n',
): (typeof documents)['\n  query GetPostsBySlug($slug: String!) {\n    posts: allPost(where: { slug: { current: { eq: $slug } } }) {\n      author {\n        givenName\n        familyName\n      }\n\n      headline\n      _createdAt\n      image {\n        _type\n        asset {\n          url\n        }\n        attribution\n        caption\n      }\n      articleBodyRaw\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query GetAllPostSlugs {\n    posts: allPost {\n      slug {\n        current\n      }\n    }\n  }\n',
): (typeof documents)['\n  query GetAllPostSlugs {\n    posts: allPost {\n      slug {\n        current\n      }\n    }\n  }\n'];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
