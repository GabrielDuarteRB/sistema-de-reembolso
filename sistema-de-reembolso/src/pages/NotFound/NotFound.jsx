import { NotFoundContainer } from "./NotFound.styled";

export const NotFound = ({}) => {
  return localStorage.getItem("token") ? (
    (window.location.href = "/principal")
  ) : (
    <>
      <NotFoundContainer>
        <h1>Página não encontrada</h1>
      </NotFoundContainer>
      {(window.location.href = "/")}
    </>
  );
};
