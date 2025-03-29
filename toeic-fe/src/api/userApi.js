import { gql } from "@apollo/client";
import client from "./apolloClient"; // Đảm bảo Apollo Client được import

const REGISTER_MUTATION = gql`
  mutation Register($input: RegisterInput!) {
    register(input: $input) {
      status
      msg
    }
  }
`;

export const registerUser = async ({ name, email, password }) => {
  return client.mutate({
    mutation: REGISTER_MUTATION,
    variables: {
      input: { name, email, password, roleId: "student" },
    },
  });
};

export const loginUser = async (formData) => {
  const LOGIN_MUTATION = gql`
    mutation Login($email: String!, $password: String!) {
      login(email: $email, password: $password) {
        status
        msg
        token
      }
    }
  `;

  return client.mutate({
    mutation: LOGIN_MUTATION,
    variables: formData,
  });
};
export const loginWithGoogle = async (idToken) => {
  const GOOGLE_LOGIN_MUTATION = gql`
    mutation GoogleLogin($idToken: String!) {
      googleLogin(idToken: $idToken) {
        status
        msg
        token
      }
    }
  `;

  return client.mutate({
    mutation: GOOGLE_LOGIN_MUTATION,
    variables: { idToken },
  });
};
