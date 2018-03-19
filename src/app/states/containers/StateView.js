import {connect} from "react-redux";
 
import StateView from "../components/StateView";
import * as actions from "../state/actions";

const mapStateToProps = (state) => {
    return {
        state: state.stateView.state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchState: function(id) {
            let actionFn = actions.fetchState(id);
            dispatch(actionFn);
        }
    }
}

export default connect(mapStateToProps, 
                    mapDispatchToProps) (StateView)