import { HeaderContainer } from "./Header.styled";

export const Header = ({ nome }) => {
  return (
    <HeaderContainer>
      <img src="" alt="Logo DBC" />
      <div>
        <span>{nome}</span>
        <img src="" alt="foto do usuário" />
      </div>
    </HeaderContainer>
  );
};
