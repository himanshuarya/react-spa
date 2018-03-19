import {connect} from "react-redux";
 
import StateList from "../components/StateList";
import * as actions from "../state/actions";

const mapStateToProps = (state) => {
    return {
        states: state.stateList.states,
        status: state.stateList.status,
        error: state.stateList.error      
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchStates: function() {
            let actionFn = actions.fetchState();
            dispatch(actionFn);
        }
    }
}

export default connect(mapStateToProps, 
                    mapDispatchToProps) (StateList)