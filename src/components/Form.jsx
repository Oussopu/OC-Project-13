import React, {useEffect, useState} from "react";
import FormInput from "./FormInput";
import FormCheckbox from "./FormCheckbox";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {login} from "../redux/actions/authActions";

const Form = () => {

    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { token } = useSelector((state) => state.auth);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(credentials)).then(() => {
            navigate('/profile');
        });
    };

    useEffect(() => {
        if (token) {
            navigate('/profile');
        }
    }, [token, navigate]);

    return (
        <form onSubmit={handleSubmit}>
            <FormInput className={"input-wrapper"} type={"text"} id={"email"}
                       htmlFor={"email"}
                       label={"Email"}
                       value={credentials.email}
                       onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}/>
            <FormInput className={"input-wrapper"} type={"password"} id={"password"} htmlFor={"password"} label={"Password"} value={credentials.password} onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}/>
            <FormCheckbox className={"input-remember"} type={"checkbox"} id={"remember-me"} htmlFor={"remember-me"} label={"Remember me"} />
            <button type="submit" className="sign-in-button">Sign In</button>
        </form>
    )
}

export default Form;
