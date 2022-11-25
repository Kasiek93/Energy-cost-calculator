import React from "react";
import { useState } from "react";
import "./_Count.scss";
import { elektricityDropdown } from "../organisms/ShowSupplier/SupplierList";
import { gasDropdown } from "../organisms/ShowSupplier/SupplierList";
import { Link } from 'react-router-dom';

export default function List() {
    const [dropdownElec, setDropdownElec] = useState(false);
    const [dropdownGas, setDropdownGas] = useState(false);
    return (
        <div
            className="list__wrapper"
            style={{

                textAlign: "center",
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
            }}
        >
            <div className="elec_wrapper">
                <button onClick={() => setDropdownElec(!dropdownElec)}>
                    Policz rachunek za prąd
                </button>


                {dropdownElec && (
                    <ul className="navel-item">
                        {elektricityDropdown.map((item) => {
                            return <li key={item.id}>
                                <Link to='/Electricity'>{item.title}</Link>

                            </li>



                        })}
                    </ul>
                )}





            </div>
            <div className="gas_wrapper">
                <button onClick={() => setDropdownGas(!dropdownGas)}>
                    Policz rachunek za gaz
                </button>
                {dropdownGas && (
                    <ul className="navgas-item">
                        {gasDropdown.map((item) => {
                            return <li key={item.id}>{item.title}</li>;
                        })}
                    </ul>
                )}
            </div>
        </div>
    );
}



