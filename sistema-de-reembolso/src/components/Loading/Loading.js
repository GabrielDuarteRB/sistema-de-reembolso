import { LoadingContainer, LoadingDot } from "./Loading.styled";
import { Container } from "../Container/Container";

const Loading = ({ height }) => {
  return (
    <Container>
      <LoadingContainer height={height}>
        <LoadingDot />
        <LoadingDot />
        <LoadingDot />
      </LoadingContainer>
    </Container>
  );
};
export default Loading;
