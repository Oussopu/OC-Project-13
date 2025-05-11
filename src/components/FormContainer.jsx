import React from "react";
import Form from "./Form.jsx";

const FormContainer = () => {
    return (
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <Form />
        </section>
    )
}

export default FormContainer;
