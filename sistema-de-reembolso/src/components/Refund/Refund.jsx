import { connect } from "react-redux"
import { primaryColor, secondaryColor } from "../../utils/colors"
import { FaTrash, FaEdit } from "react-icons/fa";
import { Button } from "../Button/Button"
import { List } from "../List/List"
import moment from 'moment'
import { handleDeleteRefund, navigateToUpdate } from "../../store/actions/refundActions";
import { useNavigate } from "react-router-dom";

const Refund = ({ dispatch, refund }) => {

  const navigate = useNavigate()

  return (
    <List>
        {
            refund.map((r) => (
                <li key={r.idReembolso}>
                    <span>{r.titulo}</span>
                    <span>{moment(r.data).format('DD/MM/YYYY')}</span>
                    <span>R$ {parseFloat(r.valor).toFixed(2)}</span>
                    <span>{r.statusDoReembolso}</span>
                    <div>
                    <Button
                        background={primaryColor}
                        backgroundHover={secondaryColor}
                        color={secondaryColor}
                        colorHover={primaryColor}
                        borderColor={primaryColor}
                        padding={"8px"}
                        onClick={() => navigateToUpdate(navigate, r.idReembolso)}
                    >
                        <FaEdit/>
                    </Button>
                    <Button
                        background={primaryColor}
                        backgroundHover={secondaryColor}
                        color={secondaryColor}
                        colorHover={primaryColor}
                        borderColor={primaryColor}
                        padding={"8px"}
                        onClick={() => handleDeleteRefund(dispatch, r.idReembolso)}
                    >
                        <FaTrash/>
                    </Button>
                    </div>
                </li>
            ))
        }
        
    </List>
            
  )
}

const mapStateToProps = (state) => ({
    refund: state.refundReducer.refund,
});
export default connect(mapStateToProps)(Refund);