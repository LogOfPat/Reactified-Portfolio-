import { useState } from 'react';

import {validateEmail} from '../../utils/helpers'

function Contact() {


    //set use states
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    //Handlers
    const inputGetType = (e) => {
        e.preventDefault();

        const {target} = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name') {
            setName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const mouseLeaveForm = (e) => {
        if (email || name || message === '') {
            setError("fill out all forms and submit");
            } 
        }

    const inputSubmit = (e) => {
        e.preventDefault();

        if(!validateEmail(email)){
            setError('Input a valid email');
            return;
        }

        setEmail('');
        setName('');
        setMessage('');
        setError('');
    };
    

    return(
        <section id="contact-info" className="block rounded section-card red">
            <h1>Contact Info</h1>
            <div className="tcard" onSubmit={inputSubmit}>
                <form id="contact-form" className="form">
                    <input 
                        onMouseLeave={mouseLeaveForm} 
                        value = {email}
                        name = "email"
                        onChange={inputGetType}
                        type = "email"
                        placeholder = "email" 
                    />
                    <input 
                        onMouseLeave={mouseLeaveForm} 
                        value = {name}
                        name = "name"
                        onChange={inputGetType}
                        type = "text"
                        placeholder = "name" 
                    />
                    <input
                        onMouseLeave={mouseLeaveForm} 
                        value = {message}
                        name = "message"
                        onChange={inputGetType}
                        type = "text"
                        placeholder = "message" 
                        />
                    <button type="submit">Submit</button> 
                </form>
                {error && (
                    <div>
                        <p>{error}</p>
                    </div>
                )}
            </div>

        </section>
    );

};

export default Contact