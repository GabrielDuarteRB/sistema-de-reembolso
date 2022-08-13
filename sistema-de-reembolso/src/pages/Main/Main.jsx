import { ButtonPrimary } from "../../components/Button/Button";
import { Container } from "../../components/Container/Container";
import { Header } from "../../components/Header/Header";
import { RiRefund2Line } from "react-icons/ri";
import { MdDelete, MdEdit } from "react-icons/md";
import {
  List,
  ListContainer,
  ListHeader,
  ListTitles,
} from "../../components/List/List";
import Pager from "../../components/Pager/Pager";

const Main = () => {
  return (
    <>
      <Header nome={"Marcos"} />
      <Container>
        <ButtonPrimary padding={"12px 16px"}>
          Solicitar reembolso <RiRefund2Line fontSize={"24px"} />
        </ButtonPrimary>

        <ListContainer>
          <ListHeader>
            <div>
              <h2>Reembolsos</h2>
              <Pager />
            </div>
            <ListTitles>
              <span>Título</span>
              <span>Data</span>
              <span>Valor</span>
              <span>Situação</span>
              <span>Ações</span>
            </ListTitles>
          </ListHeader>
          <List>
            <li>
              <span>Reembolso referente a almoço</span>
              <span>13/08/2022</span>
              <span>R$ 20,00</span>
              <span>reprovado financeiro</span>
              <div>
                <ButtonPrimary padding={"8px"}>
                  <MdEdit fontSize={"20px"} />
                </ButtonPrimary>
                <ButtonPrimary padding={"8px"}>
                  <MdDelete fontSize={"20px"} />
                </ButtonPrimary>
              </div>
            </li>
            <li>
              <span>Reembolso</span>
              <span>13/08/2022</span>
              <span>R$ 20,00</span>
              <span>reprovado financeiro</span>
              <div>
                <ButtonPrimary padding={"8px"}>
                  <MdEdit fontSize={"20px"} />
                </ButtonPrimary>
                <ButtonPrimary padding={"8px"}>
                  <MdDelete fontSize={"20px"} />
                </ButtonPrimary>
              </div>
            </li>
            <li>
              <span>Reembolso</span>
              <span>13/08/2022</span>
              <span>R$ 20,00</span>
              <span>reprovado financeiro</span>
              <div>
                <ButtonPrimary padding={"8px"}>
                  <MdEdit fontSize={"20px"} />
                </ButtonPrimary>
                <ButtonPrimary padding={"8px"}>
                  <MdDelete fontSize={"20px"} />
                </ButtonPrimary>
              </div>
            </li>
          </List>
        </ListContainer>
      </Container>
    </>
  );
};
export default Main;
