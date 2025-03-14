import React from "react";
import { useQuery } from "@apollo/client";
import { GET_VOCABULARIES } from "../graphql/queries";

const VocabularyList = () => {
  const { loading, error, data } = useQuery(GET_VOCABULARIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Danh sách từ vựng</h2>
      <ul>
        {data.vocabularies.map((vocab) => (
          <li key={vocab.id}>
            {vocab.word} - {vocab.meaning} (Level {vocab.level})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VocabularyList;
