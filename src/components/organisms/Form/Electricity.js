import React from 'react';
import {useState, useEffect} from 'react';
import "./_Electricity.scss";
import {useParams} from "react-router-dom";

const getData = () => {
    const data = window.localStorage.getItem('equipments');
    if (data) {
        return JSON.parse(data);
    } else {
        return []
    }
}


const NewItemForm = () => {
    const params = useParams();
    var converter
    switch (params.company) {
        case 'Tauron':
            converter = 0.73;
            break;
        case 'Energa':
            converter = 0.80;
            break;
        case 'E.ON':
            converter = 0.80;
            break;
        case 'PGE':
            converter = 0.78;
            break;
        case 'Enea':
            converter = 0.73;
            break;
    }

    const [result,setResult] =useState();
    const [equipments, setEquipments] = useState(getData());
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
        setResult('');
    }
    useEffect(() => {
        localStorage.setItem('equipments', JSON.stringify(equipments));
    }, [equipments])
    console.log({device, power, hours, days,result});
    return (

        <div className='wraper'>
            <h1>Przelicznik prądu</h1>
            <div className='form-container'>
                <form autoComplete="off" className='form-group'
                      onSubmit={(e)=>
                      {e.preventDefault();setResult(power*days*hours*converter);

                          setInfo(tab =>[...tab,{
                              device:device,
                              power:power,
                              hours:hours,
                              days:days,
                              result:result,
                          }])
                          }}

                >


                    <label>Urządzenie</label>
                    <div className="custom-select">
                        <select className="selectInput" value={device} onChange={e => setDevice(e.target.value)}>
                            <option value="Lodówka">Lodówka</option>
                            <option value="Telewizor">Telewizor</option>
                            <option value="Pralka">Pralka</option>
                            <option value="Mikrofalówka">Mikrofalówka</option>
                            <option value="Komputer">Komputer</option>
                            <option value="Zmywarka">Zmywarka</option>
                            <option value="Odkurzacz">Odkurzacz</option>
                            <option value="Kuchenka Elektryczna">Kuchenka Elektryczna</option>
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
                    export default NewItemForm;




