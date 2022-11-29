import React from 'react';
import {useState, useEffect} from 'react';
import View from "./View";
import "./_Electricity.scss";

const getData = () => {
    const data = window.localStorage.getItem('equipments');
    if (data) {
        return JSON.parse(data);
    } else {
        return []
    }
}


const NewItemForm = () => {


    const [equipments, setEquipments] = useState(getData());

    const [device, setDevice] = useState('');
    const [power, setPower] = useState('');
    const [hours, setHours] = useState('');
    const [days, setDays] = useState('');
    const [selects, setSelects] = useState('');

    const handleAddEquipmentSubmit = (e) => {
        e.preventDefault();


        setEquipments({device, power, hours, days})
        setDevice('');
        setPower('');
        setHours('');
        setDays('');
    }
    useEffect(() => {
        localStorage.setItem('equipments', JSON.stringify(equipments));
    }, [equipments])
    console.log({device, power, hours, days});
    console.log(device);
    return (

        <div className='wraper'>
            <h1>Przelicznik prądu</h1>
            <div className='form-container'>
                <form autoComplete="off" className='form-group'
                      onSubmit={() => {
                          handleAddEquipmentSubmit()
                      }}>

                    <label>Urządzenie</label>


                    <div className="custom-select">
                        <select className="selectInput" value={selects} onChange={e => setSelects(e.target.value)}>
                            <option value="1">Lodówka</option>
                            <option value="2">Telewizor</option>
                            <option value="3">Pralka</option>
                            <option value="4">Mikrofalówka</option>
                            <option value="5">Komputer</option>
                            <option value="6">Zmywarka</option>
                            <option value="7">Odkurzacz</option>
                            <option value="8">Kuchenka Elektryczna</option>
                        </select>

                    </div>
                    <br/>

                    <label>Moc</label>
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


                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {/*<View equipments={equipments}/>*/}
                            <View/>

                            </tbody>
                            </table>
                            </div>


                        {/*{equipments.length < 1 && <div> brak urzadzeń</div>}*/}

                </div>

                </div>

                    );


                    }


                    export default NewItemForm;




