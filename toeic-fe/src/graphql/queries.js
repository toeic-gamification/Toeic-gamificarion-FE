import { gql } from "@apollo/client";

// Lấy danh sách từ vựng
export const GET_VOCABULARIES = gql`
  query {
    vocabularies {
      id
      word
      meaning
      level
    }
  }
`;

// Thêm từ vựng mới
export const ADD_VOCABULARY = gql`
  mutation AddVocabulary($word: String!, $meaning: String!, $level: Int!) {
    addVocabulary(word: $word, meaning: $meaning, level: $level) {
      id
      word
      meaning
    }
  }
`;
