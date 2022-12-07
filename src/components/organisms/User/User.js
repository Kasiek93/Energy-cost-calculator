import React from "react";
import {useState} from "react";
import './_User.scss';

export default function UserSignUp() {
    const [name, setName] = useState(
        localStorage.getItem("name"));
    const [email, setEmail] = useState(
        localStorage.getItem("email"));
    const [password, setPassword] = useState(
        localStorage.getItem("password"));



    const submitHandler = (e) => {

      //  e.preventDefault()

        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
        localStorage.setItem("password", password)

    }


    return (
        <form className="form">
            <p>Nazwa użytkownika:</p>
            <input type="text" placeholder="name" onChange={(e) => setName(e.target.value)}/>
            <p>Email użytkownika:</p>
            <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
            <p>Hasło użytkownika:</p>
            <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>

            <button onClick={submitHandler}>Zapisz</button>

        </form>

    )
}