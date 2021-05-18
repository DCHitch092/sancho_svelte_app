/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePiece = /* GraphQL */ `
  subscription OnCreatePiece($owner: String!) {
    onCreatePiece(owner: $owner) {
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
export const onUpdatePiece = /* GraphQL */ `
  subscription OnUpdatePiece($owner: String!) {
    onUpdatePiece(owner: $owner) {
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
export const onDeletePiece = /* GraphQL */ `
  subscription OnDeletePiece($owner: String!) {
    onDeletePiece(owner: $owner) {
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
