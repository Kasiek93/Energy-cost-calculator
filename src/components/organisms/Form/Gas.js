import React from 'react';
import {useState, useEffect} from 'react';

import {useParams} from "react-router-dom";

const getDataForm = () => {
    const data = window.localStorage.getItem('equipments');
    if (data) {
        return JSON.parse(data);
    } else {
        return []
    }
}


const NewItem = () => {
    const params = useParams();
    var counter
    var fee

    switch (params.corporation) {
        case 'EWE':
            counter = 0.23;
            fee = 6.27;
            break;
        case 'Fortum':
            counter = 0.20;
            fee = 7.30;
            break;
        case 'PGNiG':
            counter = 0.20;
            fee = 6.30;
            break;
        case 'PGE':
            counter = 0.24;
            fee = 6.58;
            break;
        case 'Tauron':
            counter = 0.20;
            fee = 6.30;
            break;
    }

    const [score,setScore] =useState();
    const [equipments, setEquipments] = useState(getDataForm());
    const [device, setDevice] = useState('');
    const [power, setPower] = useState('');
    const [hours, setHours] = useState('');
    const [days, setDays] = useState('');
    const [info,setInfo] = useState([]);

    const handleAddSubmit = (e) => {
        e.preventDefault();


        setEquipments({device, power, hours, days})
        setDevice('');
        setPower('');
        setHours('');
        setDays('');
        setScore('');
    }
    useEffect(() => {
        localStorage.setItem('equipments', JSON.stringify(equipments));
    }, [equipments])
    console.log({device, power, hours, days,score});
    return (

        <div className='wraper'>
            <h1>Przelicznik gazu</h1>
            <div className='form-container'>
                <form autoComplete="off" className='form-group'
                      onSubmit={(e)=>
                      {e.preventDefault();setScore(power*days*hours*counter+fee);

                          setInfo(tab =>[...tab,{
                              device:device,
                              power:power,
                              hours:hours,
                              days:days,
                              score:score,
                          }])
                      }}

                >


                    <label>Urządzenie</label>
                    <div className="custom-select">
                        <select className="selectInput" value={device} onChange={e => setDevice(e.target.value)}>
                            <option value="Kocioł gazowy">Kocioł gazowy</option>
                            <option value="Kuchenka gazowa">Kuchenka gazowa</option>

                        </select>

                    </div>
                    <br/>

                    <label>Moc[kWh]</label>
                    <input type="text" className='form-control' required
                           onChange={(e) => setPower(e.target.value)} value={power}/>
                    <br/>
                    <label>Ilość godzin/dzień</label>
                    <input type="text" className='form-control' required
                           onChange={(e) => setHours(e.target.value)} value={hours}/>
                    <br/>
                    <label>Ilość dni/miesiąc</label>
                    <input type="text" className='form-control' required
                           onChange={(e) => setDays(e.target.value)} value={days}/>
                    <br/>
                    <button type="submit" className='btn btn-success btn-md'>
                        Dodaj
                    </button>
                </form>
            </div>



            <div className='view-container'>

                <div className='table-responsive'>
                    <table className='table'>
                        <thead>
                        <tr>
                            <th>Urządzenie</th>
                            <th>Moc</th>
                            <th>Godziny</th>
                            <th>Dni</th>
                            <th>Zużycie</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>

                        {info.map(equipment => (
                            <tr key={equipment.device}>
                                <td>{equipment.device}</td>
                                <td>{equipment.power}</td>
                                <td>{equipment.hours}</td>
                                <td>{equipment.days}</td>
                                <td>{equipment.result}</td>
                            </tr>))}

                        </tbody>
                    </table>
                </div>


            </div>

        </div>

    );

}
export default NewItem;