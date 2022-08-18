import moment from "moment";
import { connect } from "react-redux";
import { primaryColor, secondaryColor } from "../../utils/colors";
import { Button } from "../Button/Button";
import { List } from "../List/List"
import { FaCheckCircle, FaTrash, FaFileDownload } from "react-icons/fa";
import { managerAprove } from "../../store/actions/refundActions";

const RefundManager = ({dispatch, page, size, refund}) => {

  return (
    <List>
        {
            refund.map((r) => ( 
                <li key={r.idReembolso}>
                    <span>{r.titulo}</span>
                    <span>{moment(r.data).format("DD/MM/YYYY")}</span>
                    <span>R$ {parseFloat(r.valor).toFixed(2)}</span>
                    <Button
                        background={primaryColor}
                        backgroundHover={secondaryColor}
                        color={secondaryColor}
                        colorHover={primaryColor}
                        borderColor={primaryColor}
                        padding={"8px"}
                        onClick={ () => {
                            const blob = new Blob([r.anexoDTO.data], { type: r.anexoDTO.tipo });
                            const url= window.URL.createObjectURL(blob);
                            window.open(url);
                        }}
                    >
                        <FaFileDownload />
                    </Button>

                    <div>
                    <Button
                        background={primaryColor}
                        backgroundHover={secondaryColor}
                        color={secondaryColor}
                        colorHover={primaryColor}
                        borderColor={primaryColor}
                        padding={"8px"}
                        onClick={() => managerAprove(dispatch, r.idReembolso, 'true', page, size)}
                    >
                        <FaCheckCircle />
                    </Button>

                    <Button
                        background={primaryColor}
                        backgroundHover={secondaryColor}
                        color={secondaryColor}
                        colorHover={primaryColor}
                        borderColor={primaryColor}
                        padding={"8px"}
                        onClick={() => managerAprove(dispatch, r.idReembolso, 'false', page, size)}
                    >
                        <FaTrash />
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
    page: state.pageReducer.page,
    size: state.pageReducer.size,
});
export default connect(mapStateToProps)(RefundManager); 