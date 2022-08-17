import { useEffect } from "react"
import { connect } from "react-redux"
import { Container } from "../../components/Container/Container"
import Header from "../../components/Header/Header"
import { ListContainer, ListHeader, ListTitles } from "../../components/List/List"
import Pager from "../../components/Pager/Pager"
import RefundPending from "../../components/Refund/RefundPending"
import { getAllRefund } from "../../store/actions/refundActions"

const Manager = ({dispatch, refund, page, size}) => {

  useEffect(() => {
    getAllRefund(dispatch, 'ABERTO', page, size)
  }, [page, size])

  console.log(refund)

  return (
    <>
      <Header nome={'gabriel'} />
      <Container>
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
                <span>Arquivo</span>
                <span>Ação</span>
                </ListTitles>
            </ListHeader>
          <RefundPending/>
        </ListContainer>
      </Container>
    </>
  )
}

const mapStateToProps = (state) => ({
    isLoading: state.refundReducer.isLoading,
    refund: state.refundReducer.refund,
    page: state.pageReducer.page,
    size: state.pageReducer.size,
});
export default connect(mapStateToProps)(Manager);
