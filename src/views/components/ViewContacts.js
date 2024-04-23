import {useEffect, useState} from "react";
import sha256 from 'crypto-js/sha256';
import '../css/ViewContacts.css';
//Left this for an example of encryption for when we do database password stuffs
function ViewContacts() {
    const [contacts, setContacts] = useState([]);
    const [password, setPassword] = useState('');
    const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth') === 'true');

    const hashedPassword = process.env.REACT_APP_CONTACT_HASHED_PASS;
    console.log("Hashed Pass: " + hashedPassword);

    useEffect(() => {
        fetch('/api/view')
            .then(response => response.json())
            .then(data => setContacts(data))
            .catch(error => console.error('Error fetching data: ', error))
    }, [isAuth]);

    const handlePasswordSubmit = (event) => {
        event.preventDefault();
        if (sha256(password).toString() === hashedPassword) {
            localStorage.setItem('isAuth', 'true');
            setIsAuth(true);
        } else {
            alert('Incorrect Password');
            setPassword('');
        }
    };

    if (!isAuth) {
        return (
            <div className="passwordPrompt">
                <form onSubmit={handlePasswordSubmit}>
                    <label>
                        Enter Password:
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoFocus
                        />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }

    return (
        <div className="contactsContainer">
            <h2>Contact List</h2>
            <div className="contactsList">
                {contacts.map(contact => (
                    <div key={contact.id} className="contactItem">
                        <div><strong>ID:</strong> {contact.id}</div>
                        <div><strong>Name:</strong> {contact.name}</div>
                        <div><strong>Email:</strong> {contact.email}</div>
                        <div><strong>Phone Number:</strong> {contact.phoneNumber}</div>
                        <div><strong>Message:</strong> {contact.message}</div>
                        <div><strong>Timestamp:</strong> {contact.timestamp}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ViewContacts;