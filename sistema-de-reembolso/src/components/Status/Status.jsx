import { connect } from "react-redux";
import { changeStatus } from "../../store/actions/refundActions";
import { RefundSituation } from "./Status.styled"

const Status = ({dispatch}) => {
  return (
    <section>
      <RefundSituation onChange={(e) => changeStatus(e.target.value, dispatch)}>
        <option value='TODOS'>Todos</option>
        <option value='ABERTO'>Aberto</option>
        <option value='APROVADO_GESTOR'>Aprovado pelo gestor</option>
        <option value='REPROVADO_GESTOR'>Reprovado pelo gestor</option>
        <option value='REPROVADO_FINANCEIRO'>Reprovado pelo financeiro</option>
        <option value='FECHADO_PAGO'>Pago</option>
      </RefundSituation>
    </section>
  )
}
const mapStateToProps = (state) => ({
  statusRefund: state.refundReducer.statusRefund,
});
export default connect(mapStateToProps)(Status);
