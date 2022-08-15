import { NotFoundContainer } from "./NotFound.styled";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  return localStorage.getItem("token") ? (
    navigate("/principal")
  ) : (
    <>
      <NotFoundContainer>
        <h1>Página não encontrada</h1>
      </NotFoundContainer>
      {navigate("/")}
    </>
  );
};
