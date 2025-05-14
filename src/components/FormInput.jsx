import React from "react";

const FormInput = ({className , type , id, htmlFor, label, value, onChange}) => {
    return (
        <div className={className}>
            <label htmlFor={htmlFor}>{label}</label>
            <input type={type} id={id} value={value} onChange={onChange} />
        </div>
    )
}

export default FormInput;
