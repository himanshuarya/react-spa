
import React, {PureComponent} from "react";
import PropTypes from "prop-types";

export default class StateView extends PureComponent {
    
    componentDidMount() {
        this.props.fetchState(this.props.match.params.id);
    }
    
    render() {

        console.log("StateView render")

        let state = this.props.state || {};

        return (
            <div> 
                <h3>{state.id}
                    <br/>
                    {state.code}
                    <br/>
                    {state.name}
                </h3>
            </div>
        )
    }
}