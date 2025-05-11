import React from "react";

const FormCheckbox = ({className , type , id, htmlFor, label}) => {
    return (
        <div className={className}>
            <input type={type} id={id} />
            <label htmlFor={htmlFor}>{label}</label>
        </div>
    )
}

export default FormCheckbox;
