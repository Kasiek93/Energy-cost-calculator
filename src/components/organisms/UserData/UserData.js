import React from 'react';



const UserData = () => {
    function resetUser(){
        localStorage.setItem("name","")
        localStorage.setItem("email","")
        localStorage.setItem("password","")}
    return (
        <div>
            <form>
                <button onClick={resetUser}>Usuń użytkownika</button>
            </form>

        </div>
    );
};


export default UserData;