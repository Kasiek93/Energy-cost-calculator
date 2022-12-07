import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/pages/Home";
import List from "./components/pages/Count";
import Navbar from "./components/organisms/Header/Navbar/Navbar";
import './components/pages/_Home.scss';
import UserSignUp from "./components/organisms/User/User";
import UserData from "./components/organisms/UserData/UserData";
import Footer from "./components/organisms/Footer/Footer";
import Electricity from "./components/organisms/Form/Electricity";
import Gas from "./components/organisms/Form/Gas";


function App() {

    return (

            <BrowserRouter>
                <Navbar></Navbar>

                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/policz" element={<List></List>}/>
                    <Route path="/rejestracja_uzytkownika" element={<><UserSignUp/><UserData/></>}/>
                    <Route path="/Electricity" element={<Electricity></Electricity>}/>
                    <Route path="/Electricity/:company" element={<Electricity></Electricity>}/>
                    <Route path="/Gas" element={<Gas></Gas>}/>
                    <Route path="/Gas/:corporation" element={<Gas></Gas>}/>

                </Routes>
                <Footer></Footer>
            </BrowserRouter>

    );
}

export default App;





