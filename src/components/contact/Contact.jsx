import "./contact.scss";
import { useState } from 'react';

export default function Contact() {

    const [message,setMessage] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true)
    }
    return (
        <div className='contact' id='contact'>
            <div className="left">
                <img src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80" alt="" />
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Email' />
                    <textarea placeholder="Message"></textarea>
                    <button type='submit'>Send</button>
                    {message && <span>Message Sent</span>}
                </form>
            </div>
        </div>
    )
}
