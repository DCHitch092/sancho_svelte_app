/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPiece = /* GraphQL */ `
  mutation CreatePiece(
    $input: CreatePieceInput!
    $condition: ModelPieceConditionInput
  ) {
    createPiece(input: $input, condition: $condition) {
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
export const updatePiece = /* GraphQL */ `
  mutation UpdatePiece(
    $input: UpdatePieceInput!
    $condition: ModelPieceConditionInput
  ) {
    updatePiece(input: $input, condition: $condition) {
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
export const deletePiece = /* GraphQL */ `
  mutation DeletePiece(
    $input: DeletePieceInput!
    $condition: ModelPieceConditionInput
  ) {
    deletePiece(input: $input, condition: $condition) {
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
