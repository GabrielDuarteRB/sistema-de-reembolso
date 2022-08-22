import { connect } from "react-redux";
import { changeStatus } from "../../store/actions/refundActions";
import { RefundSituation } from "./Status.styled";

const Status = ({ dispatch, isLoading, defaultValue }) => {
  return (
    <div>
      <span>Filtrar por tipo</span>
      <RefundSituation
        disabled={isLoading}
        onChange={(e) => changeStatus(e.target.value, dispatch)}
        defaultValue={defaultValue}
      >
        <option value="TODOS">Todos</option>
        <option value="ABERTO">Aberto</option>
        <option value="APROVADO_GESTOR">Aprovado pelo gestor</option>
        <option value="REPROVADO_GESTOR">Reprovado pelo gestor</option>
        <option value="REPROVADO_FINANCEIRO">Reprovado pelo financeiro</option>
        <option value="FECHADO_PAGO">Pago</option>
      </RefundSituation>
    </div>
  );
};
const mapStateToProps = (state) => ({
  isLoading: state.refundReducer.isLoading,
});
export default connect(mapStateToProps)(Status);
