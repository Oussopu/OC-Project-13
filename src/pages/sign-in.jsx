import React from 'react';
import '../assets/style/main.css';
import '../assets/media-style/media-main.css';
import Header from "../components/Header.jsx";
import FormContainer from "../components/FormContainer.jsx";

const SignIn = () => {
    return (
        <div>
            <Header isAuthenticated={false} />
            <main className="main bg-dark">
                <FormContainer />
            </main>
        </div>
    );
};

export default SignIn;
