import React from "react";
import FormInput from "./FormInput";
import FormCheckbox from "./FormCheckbox";

const Form = () => {
    return (
        <form>
            <FormInput className={"input-wrapper"} type={"text"} id={"username"} htmlFor={"username"} label={"Username"} />
            <FormInput className={"input-wrapper"} type={"password"} id={"password"} htmlFor={"password"} label={"Password"} />
            <FormCheckbox className={"input-remember"} type={"checkbox"} id={"remember-me"} htmlFor={"remember-me"} label={"Remember me"} />
            <a href="/user" className="sign-in-button">Sign In</a>
        </form>
    )
}

export default Form;
