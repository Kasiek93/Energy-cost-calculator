import React from 'react';

const View = ({equipments}) => {
    const arr = [{device:"Lodówka",
        power: "100W",
        hours: "4h",
        days: "8"},

        {device:"Telewizor",
            power: "500W",
            hours: "6h",
            days: "20"},

        {device:"Pralka",
            power: "300W",
            hours: "3h",
            days: "15"},

        {device:"Mikrofalówka",
            power: "300W",
            hours: "2h",
            days: "24"},

        {device:"Komputer",
            power: "300W",
            hours: "5h",
            days: "18"},

        {device:"Zmywarka",
            power: "150W",
            hours: "2h",
            days: "20"},
        {device:"Odkurzacz",
            power: "250W",
            hours: "1",
            days: "16"},

        {device:"Kuchenka Elektryczna",
            power: "150W",
            hours: "3h",
            days: "30"},

    ]


    return arr.map(equipment => (
        <tr key={equipment.device}>
            <td>{equipment.device}</td>
            <td>{equipment.power}</td>
            <td>{equipment.hours}</td>
            <td>{equipment.days}</td>
        </tr>

    ))
}


export default View;