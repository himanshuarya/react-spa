import {connect} from "react-redux";
 
import StateEdit from "../components/StateEdit";
import * as actions from "../state/actions";

const mapStateToProps = (state) => {
    return {
        state: state.stateView.state,
        editedState: state.stateEdit.state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchState: function(id) {
            let actionFn = actions.fetchState(id);
            dispatch(actionFn);
        },
        updateState: function(state) {
            let actionFn = actions.updateState(state);
            dispatch(actionFn);
        }
    }
}

export default connect(mapStateToProps, 
                    mapDispatchToProps) (StateEdit)