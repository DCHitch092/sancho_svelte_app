/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPiece = /* GraphQL */ `
  query GetPiece($id: ID!) {
    getPiece(id: $id) {
      id
      title
      content
      meta {
        author
        snippet
        createdAt
      }
      status {
        type
        updatedAt
        url
        where
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listPieces = /* GraphQL */ `
  query ListPieces(
    $filter: ModelPieceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPieces(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        content
        meta {
          author
          snippet
          createdAt
        }
        status {
          type
          updatedAt
          url
          where
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
