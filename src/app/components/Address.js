import React from "react";
import PropTypes from "prop-types";

export default function Address(props){
    
    let {street, city, state, pinCode, phoneNo} = props.address;

    return (
        <div> 
            <p> {street}
                <br/>
                {city} {pinCode}
                {props.state ? <span>, {state}</span> : <span>{}</span>}
                <br/>
                T: {phoneNo}
            </p>
        </div>
    )
} 

Address.propTypes = {
    address: PropTypes.shape({
        street: PropTypes.string,
        city: PropTypes.string.isRequired,
        state: PropTypes.string,
        pinCode: PropTypes.number.isRequired,
        phoneNo: PropTypes.string.isRequired
    })
}