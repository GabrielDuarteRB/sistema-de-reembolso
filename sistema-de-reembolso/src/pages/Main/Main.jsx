import { Button } from "../../components/Button/Button";
import { Container } from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import { RiRefund2Line } from "react-icons/ri";
import { MdDelete, MdEdit } from "react-icons/md";
import {
  List,
  ListContainer,
  ListHeader,
  ListTitles,
} from "../../components/List/List";
import Pager from "../../components/Pager/Pager";
import { primaryColor, secondaryColor } from "../../utils/colors";

const Main = () => {
  return (
    <>
      <Header nome={"Marcos"} />
      <Container>
        <Button
          background={primaryColor}
          backgroundHover={secondaryColor}
          padding={"12px 16px"}
          color={secondaryColor}
          colorHover={primaryColor}
          borderColor={primaryColor}
        >
          Solicitar reembolso <RiRefund2Line fontSize={"24px"} />
        </Button>

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
                <Button
                  background={primaryColor}
                  backgroundHover={secondaryColor}
                  color={secondaryColor}
                  colorHover={primaryColor}
                  borderColor={primaryColor}
                  padding={"8px"}
                >
                  <MdEdit fontSize={"20px"} />
                </Button>
                <Button
                  background={primaryColor}
                  backgroundHover={secondaryColor}
                  color={secondaryColor}
                  colorHover={primaryColor}
                  borderColor={primaryColor}
                  padding={"8px"}
                >
                  <MdDelete fontSize={"20px"} />
                </Button>
              </div>
            </li>
            <li>
              <span>Reembolso</span>
              <span>13/08/2022</span>
              <span>R$ 20,00</span>
              <span>reprovado financeiro</span>
              <div>
                <Button
                  background={primaryColor}
                  backgroundHover={secondaryColor}
                  color={secondaryColor}
                  colorHover={primaryColor}
                  borderColor={primaryColor}
                  padding={"8px"}
                >
                  <MdEdit fontSize={"20px"} />
                </Button>
                <Button
                  background={primaryColor}
                  backgroundHover={secondaryColor}
                  color={secondaryColor}
                  colorHover={primaryColor}
                  borderColor={primaryColor}
                  padding={"8px"}
                >
                  <MdDelete fontSize={"20px"} />
                </Button>
              </div>
            </li>
            <li>
              <span>Reembolso</span>
              <span>13/08/2022</span>
              <span>R$ 20,00</span>
              <span>reprovado financeiro</span>
              <div>
                <Button
                  background={primaryColor}
                  backgroundHover={secondaryColor}
                  color={secondaryColor}
                  colorHover={primaryColor}
                  borderColor={primaryColor}
                  padding={"8px"}
                >
                  <MdEdit fontSize={"20px"} />
                </Button>
                <Button
                  background={primaryColor}
                  backgroundHover={secondaryColor}
                  color={secondaryColor}
                  colorHover={primaryColor}
                  borderColor={primaryColor}
                  padding={"8px"}
                >
                  <MdDelete fontSize={"20px"} />
                </Button>
              </div>
            </li>
          </List>
        </ListContainer>
      </Container>
    </>
  );
};
export default Main;
