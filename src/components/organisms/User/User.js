import React from "react";
import {useState, useEffect} from "react";
import './_User.scss';

export default function UserSignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const user = {nameUser: name, emailUser: email, passwordUser: password}

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user))
    }, [name])

    useEffect(() => {
        localStorage.setItem("email", email)
    }, [email])

    useEffect(() => {
        localStorage.setItem("password", password)
    }, [password])


    const submitHandler = (e) => {

        // e.preventDefault()
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
            <div>

                <div>{localStorage.getItem("name")}</div>
                <div>{localStorage.getItem("email")}</div>
                <div>{localStorage.getItem("password")}</div>
            </div>
        </form>

    )
}