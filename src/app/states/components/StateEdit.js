import React, {PureComponent} from "react";
import PropTypes from "prop-types";

export default class StateEdit extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            code: '',
            name: '',
            updated: false
        };     
    }
    
    componentDidMount() {
        this.props.fetchState(this.props.match.params.id);
        this.setState({
            updated: false
        });
    }

    componentWillReceiveProps(nextProps){
        if(nextProps){
            if(nextProps.editedState.code === this.state.code && nextProps.editedState.name === this.state.name){
                this.setState({
                    updated: true
                })
            }
            else {
                this.setState({
                    id: nextProps.state.id,
                    code: nextProps.state.code,
                    name: nextProps.state.name
                })
            }
        }
    }

    onCodeChange(e){
        console.log(e.target.value);
        this.setState({
            code: e.target.value
        })
    }

    onNameChange(e){
        console.log(e.target.value);
        this.setState({
            name: e.target.value
        })
    }
    
    render() {

        console.log('StateEdit render')

        return (
            <div> 
                <h3>{this.state.id}
                    <br/>
                    <input  type='text' value={this.state.code} onChange={(e) => this.onCodeChange(e)}/>
                    <br/>
                    <input  type='text' value={this.state.name} onChange={(e) => this.onNameChange(e)}/>
                </h3>
                <a className="button" 
                   onClick={() => this.props.updateState({id: this.state.id, code: this.state.code, name: this.state.name})}>
                   Update
                </a>
                {this.state.updated &&
                    <div>
                        <label>Updated!</label>
                    </div>
                }
            </div>
        )
    }
}