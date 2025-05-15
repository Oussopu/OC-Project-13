import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile } from '../redux/actions/profileAction.js';

const WelcomeMessage = () => {
    const { firstName, lastName } = useSelector((state) => state.profile);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({ firstName, lastName });
    const dispatch = useDispatch();

    useEffect(() => {
        setFormData({ firstName, lastName });
    }, [firstName, lastName]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUserProfile(formData));
        setIsEditing(false);
    };

    return (
        <div className="welcome-message">
            {isEditing ? (
                <form className="edit-form" onSubmit={handleSubmit}>
                    <h1>Welcome back</h1>
                    <div className="edit-input">
                        <div className="edit-first-name">
                            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder={firstName} />
                        </div>
                        <div className="edit-last-name">
                            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder={lastName} />
                        </div>
                    </div>
                    <div className="edit-button-group">
                        <button className="edit-button" type="submit">Save</button>
                        <button className="edit-button" type="button" onClick={() => setIsEditing(false)}>Cancel</button>
                    </div>
                </form>
            ) : (
                <h1>Welcome back<br />{firstName + " " + lastName}</h1>
            )}
            {!isEditing && (
                <button className="edit-button" onClick={() => setIsEditing(true)}>
                    Edit Name
                </button>
            )}
        </div>
    );
};

export default WelcomeMessage;
