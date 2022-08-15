import { LoadingContainer, LoadingDot } from "./Loading.styled";
import { Container } from "../Container/Container";

const Loading = () => {
  return (
    <Container>
      <LoadingContainer>
        <LoadingDot />
        <LoadingDot />
        <LoadingDot />
      </LoadingContainer>
    </Container>
  );
};
export default Loading;
