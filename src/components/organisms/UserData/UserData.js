import React from 'react';

const UserData = () => {
    function resetUser(){
        localStorage.setItem("name","")
        localStorage.setItem("email","")
        localStorage.setItem("password","")}
    return (
        <form className="form">
            <button onClick={resetUser}>Usuń użytkownika</button>
        </form>
    );
};


export default UserData;