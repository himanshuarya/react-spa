
import React, {PureComponent} from "react";
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";

export default class StateList extends PureComponent {

    componentDidMount() {
        this.props.fetchStates();
    }
    
    render() {

        let states = this.props.states || [];
        let status = this.props.status;
        let error = this.props.error;

        console.log("StateList render");

        if (status) {
            return (
                <div>
                    <h2>Loading...</h2>
                    <img src="/assets/loading.gif" />
                </div>
            )
        }

        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Code</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        states.map( state => (
                            <tr key={state.id}>
                                <td>
                                    {state.id}
                                </td>
                                <td>
                                    {state.name}
                                </td>
                                <td>
                                    {state.code}
                                </td>
                                <td>
                                    <Link to={`states/view/${state.id}`} className="button">View</Link>  
                                </td>
                                <td>
                                    <Link to={`states/edit/${state.id}`} className="button">Edit</Link> 
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}