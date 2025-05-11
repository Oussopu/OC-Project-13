import React from "react";

const FormInput = ({className , type , id, htmlFor, label}) => {
    return (
        <div className={className}>
            <label htmlFor={htmlFor}>{label}</label>
            <input type={type} id={id} />
        </div>
    )
}

export default FormInput;
