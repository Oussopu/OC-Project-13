import React from "react";

const WelcomeMessage = ({ firstName, lastName }) => {
    return (
        <div className="welcome-message">
            <h1>Welcome back<br />{ firstName + " " + lastName }</h1>
            <button className="edit-button">Edit Name</button>
        </div>
    )
}

export default WelcomeMessage;
