
import React, {PureComponent} from "react";
import Address from "./Address";

export default class Contact extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            branchAddress : {
                street: "612 Park Centra, Sector 30",
                city: "Gurugram",
                state: "Haryana",
                pinCode: 122002,
                phoneNo: "+91 (0124) 470 0200"
            },
            mainAddress : {
                street: "Laapersveld 27",
                city: "Hilversum",
                pinCode: 1213,
                phoneNo: "+31 (0)35 672 906"
            }
        };
    }

    
    render() {
        console.log('Contact render');

        return (
            <div> 
                <h2>Xebia India</h2>
                <Address address={this.state.branchAddress}/>
                <h2>Xebia Netherlands</h2>
                <Address address={this.state.mainAddress}/>
            </div>
        )
    }
}